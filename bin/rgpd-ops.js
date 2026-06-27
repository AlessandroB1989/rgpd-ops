#!/usr/bin/env node
/**
 * rgpd-ops CLI
 *
 * Installe le skill Claude Code « rgpd-ops » soit dans le dossier global de
 * l'utilisateur (~/.claude/skills/rgpd-ops/), soit dans le ./.claude/skills/
 * du projet courant.
 *
 * Optionnellement, dépose aussi des stubs de commandes dans ~/.claude/commands/
 * pour que chaque tâche soit atteignable en commande slash explicite.
 *
 * C'est un garde-fou d'ingénierie au moment du build. Ce n'est PAS un conseil
 * juridique et cela ne rend PAS un abonnement Claude grand public apte à traiter
 * des données personnelles ou de santé. Voir skill/frameworks/avertissement.md.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'rgpd-ops';
const PACKAGE_ROOT = path.resolve(__dirname, '..');
const SKILL_SRC = path.join(PACKAGE_ROOT, 'skill');
const PKG = require(path.join(PACKAGE_ROOT, 'package.json'));

function userClaudeDir() {
  return path.join(os.homedir(), '.claude');
}

function projectClaudeDir() {
  return path.join(process.cwd(), '.claude');
}

function resolveSkillTarget(opts) {
  const base = opts.project ? projectClaudeDir() : userClaudeDir();
  return path.join(base, 'skills', SKILL_NAME);
}

function resolveCommandsDir(opts) {
  const base = opts.project ? projectClaudeDir() : userClaudeDir();
  return path.join(base, 'commands');
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else if (entry.isFile()) {
      fs.copyFileSync(s, d);
    }
  }
}

function rmrf(target) {
  if (!fs.existsSync(target)) return;
  fs.rmSync(target, { recursive: true, force: true });
}

function commandStub(name, summary) {
  return `---
name: ${name}
description: ${summary}
---

Cette commande route vers la tâche \`${name.replace(/^rgpd-ops-?/, '')}\` du skill \`rgpd-ops\`.

Si le skill est installé, l'outil Skill le charge automatiquement. Sinon :

    npx rgpd-ops install
`;
}

function commandStubs() {
  return {
    'rgpd-ops.md': commandStub(
      'rgpd-ops',
      'Garde-fou RGPD/CNIL/HDS piloté par interview : conçoit ce que tu construis avec les bons principes RGPD intégrés. Pas un conseil juridique.'
    ),
    'rgpd-ops-audit.md': commandStub(
      'rgpd-ops-audit',
      'Audite un build ou un flux de données existant pour repérer les écarts RGPD (donnée perso/santé chez un sous-traitant non couvert, ou touchée par l\'IA).'
    ),
    'rgpd-ops-document.md': commandStub(
      'rgpd-ops-document',
      'Génère le registre des traitements (Art. 30) + la cartographie des flux + la checklist DPA pour un DPO.'
    )
  };
}

function writeCommandStubs(opts) {
  const dir = resolveCommandsDir(opts);
  fs.mkdirSync(dir, { recursive: true });
  const stubs = commandStubs();
  for (const [name, body] of Object.entries(stubs)) {
    fs.writeFileSync(path.join(dir, name), body);
  }
  return { dir, count: Object.keys(stubs).length };
}

function removeCommandStubs(opts) {
  const dir = resolveCommandsDir(opts);
  const stubs = commandStubs();
  let removed = 0;
  for (const name of Object.keys(stubs)) {
    const p = path.join(dir, name);
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      removed += 1;
    }
  }
  return { dir, removed };
}

function install(opts) {
  const target = resolveSkillTarget(opts);
  const exists = fs.existsSync(target);

  if (exists && !opts.force) {
    console.error(
      `[rgpd-ops] Skill déjà installé ici :\n  ${target}\n\n` +
        `Relancer avec --update pour écraser, ou --uninstall pour le retirer d'abord.`
    );
    process.exitCode = 1;
    return;
  }

  if (exists && opts.force) {
    rmrf(target);
  }

  copyDir(SKILL_SRC, target);

  console.log(`[rgpd-ops] Skill installé :`);
  console.log(`  ${target}`);

  if (opts.withCommands) {
    const result = writeCommandStubs(opts);
    console.log(`[rgpd-ops] Stubs de commandes écrits (${result.count}) :`);
    console.log(`  ${result.dir}`);
  }

  console.log('');
  console.log(`Invoque depuis Claude Code avec :  /${SKILL_NAME}`);
  console.log(`Ou en langage naturel (« est-ce conforme RGPD ? », « j'ai des utilisateurs UE », « rgpd ops »).`);
  console.log('');
  console.log(`Rappel : garde-fou au moment du build uniquement. PAS un conseil juridique ; ne rend PAS`);
  console.log(`un abonnement Claude grand public apte à traiter du perso/santé. Voir skill/frameworks/avertissement.md.`);
}

function uninstall(opts) {
  const target = resolveSkillTarget(opts);
  let removedSkill = false;
  if (fs.existsSync(target)) {
    rmrf(target);
    removedSkill = true;
  }

  const cmdResult = opts.withCommands ? removeCommandStubs(opts) : { removed: 0 };

  if (!removedSkill && cmdResult.removed === 0) {
    console.log(`[rgpd-ops] Rien à désinstaller à ${target}`);
    return;
  }

  if (removedSkill) console.log(`[rgpd-ops] Skill retiré : ${target}`);
  if (cmdResult.removed > 0) {
    console.log(
      `[rgpd-ops] ${cmdResult.removed} stub(s) de commande retiré(s) de ${cmdResult.dir}`
    );
  }
}

function where(opts) {
  console.log(resolveSkillTarget(opts));
}

function help() {
  console.log(`rgpd-ops v${PKG.version}

Installe le skill Claude Code « rgpd-ops » (garde-fou RGPD/CNIL/HDS au build, FR/UE).

Usage :
  npx rgpd-ops <commande> [options]

Commandes :
  install         Installe le skill dans ~/.claude/skills/${SKILL_NAME}/
  update          Comme install, mais écrase si déjà présent
  uninstall       Retire le skill du dossier cible
  where           Affiche le chemin d'installation cible et quitte
  --help, -h      Affiche ce message
  --version, -v   Affiche la version

Options :
  --project       Installe dans le ./.claude/ du projet courant plutôt que ~/.claude/
  --with-commands Écrit aussi les stubs de commandes (rgpd-ops, -audit, -document)

Exemples :
  npx rgpd-ops install
  npx rgpd-ops install --project
  npx rgpd-ops install --with-commands
  npx rgpd-ops update --with-commands

Nom du skill une fois installé : /${SKILL_NAME}
Repo :                           https://github.com/AlessandroB1989/rgpd-ops

PAS un conseil juridique. Ne rend PAS un abonnement Claude grand public apte à traiter du perso/santé.
`);
}

function parseArgs(argv) {
  const opts = {
    project: false,
    withCommands: false,
    force: false
  };
  let cmd = null;
  for (const arg of argv) {
    if (arg === '--project') opts.project = true;
    else if (arg === '--with-commands' || arg === '--commands') opts.withCommands = true;
    else if (arg === '--update' || arg === '--force' || arg === '-f') opts.force = true;
    else if (arg === '--help' || arg === '-h') cmd = '__help';
    else if (arg === '--version' || arg === '-v') cmd = '__version';
    else if (!arg.startsWith('-') && cmd === null) cmd = arg;
  }
  return { cmd, opts };
}

function main() {
  const { cmd, opts } = parseArgs(process.argv.slice(2));

  switch (cmd) {
    case 'install':
      install(opts);
      return;
    case 'update':
      opts.force = true;
      install(opts);
      return;
    case 'uninstall':
      uninstall(opts);
      return;
    case 'where':
      where(opts);
      return;
    case '__version':
      console.log(PKG.version);
      return;
    case '__help':
    case null:
    default:
      help();
      return;
  }
}

main();
