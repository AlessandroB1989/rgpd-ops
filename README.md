# RGPD Ops

> Garde-fou **RGPD / CNIL** pour [Claude Code](https://claude.ai/code), calibré **France & UE**. Rend l'IA consciente des règles de protection des données — **RGPD, CNIL, HDS (santé), ePrivacy/cookies** — *avant* qu'elle ne construise, pour que chaque site, formulaire, automatisation ou SaaS soit conçu conforme par défaut. Une ceinture de sécurité et une trace écrite, **pas un conseil juridique**.

Inspiré de la structure de [compliance-ops](https://github.com/charlesdove977/compliance-ops) (orienté US : HIPAA/SOC 2/PCI), mais entièrement réécrit pour le contexte **français et européen** — là où ce dernier était le plus léger.

---

## Ce que ça fait

La plupart des gens collent la conformité *après* avoir construit — et la donnée perso a déjà traversé trois outils qui n'auraient jamais dû la toucher. RGPD Ops se place **avant** le build :

1. **Il t'interroge d'abord** : qu'est-ce que tu construis, et quelles données ça touche (perso UE, **santé**, RH, paiement, "pas sûr").
2. **Il charge le bon cadre** : RGPD général, spécificités **CNIL/France**, **HDS** pour la santé, **ePrivacy** pour les cookies — un ou plusieurs à la fois.
3. **Il conçoit correct-par-défaut** : la donnée perso est isolée dans sa propre voie, routée seulement via des sous-traitants couverts (**DPA Art. 28 + base légale + transfert valide** ; hébergeur **certifié HDS** pour la santé). L'IA reste hors du chemin des données sensibles.
4. **Il déclenche un tripwire** si quelque chose cloche (IA qui va lire des données de santé, outil sans DPA branché sur du perso, transfert hors UE non couvert, santé hors HDS…).
5. **Il documente la frontière** : registre des traitements (Art. 30), cartographie des flux, checklist DPA — à remettre au DPO.

---

## Activation

**En langage naturel** : « est-ce conforme RGPD ? », « j'ai des utilisateurs UE », « où héberger des données de santé ? », « ai-je besoin d'un DPA / d'une AIPD ? », ou toute mention de **rgpd, cnil, données personnelles, données de santé, HDS, DPA, consentement, cookies, transfert hors UE**.

**Ou par commande :**

| Commande | Rôle |
|---|---|
| `/rgpd-ops` | Interview + garde un nouveau build |
| `/rgpd-ops audit` | Audite un système existant et classe les écarts |
| `/rgpd-ops document` | Génère registre + cartographie + checklist DPA |

---

## Contenu

```
rgpd-ops/skill/
├── SKILL.md                          # Entrée — activation, persona, routage
├── tasks/
│   ├── interview.md                  # Défaut : interroge puis garde le build
│   ├── audit.md                      # Trace un flux existant, classe les écarts
│   └── document.md                   # Génère la doc pour le DPO
├── frameworks/
│   ├── principes-rgpd.md             # Tronc commun (flux de décision, deux voies)
│   ├── rgpd.md                       # RGPD : bases légales, Art. 9, droits, transferts, AIPD
│   ├── cnil-france.md                # CNIL, souveraineté (CLOUD Act/SecNumCloud), cookies, DPO
│   ├── donnees-sante-hds.md          # Santé : certification HDS, pattern SaaS santé
│   ├── matrice-sous-traitants.md     # Lookup par outil FR/UE (DPA, transfert, HDS, souveraineté)
│   └── avertissement.md              # Le cadrage non négociable
├── templates/
│   ├── registre-traitements.md       # Registre Art. 30
│   ├── cartographie-flux.md          # Où va la donnée + qui la touche
│   └── checklist-sous-traitant-dpa.md
└── checklists/
    └── tripwires-rgpd.md             # Garde-fous pré-build — STOP si l'un saute
```

---

## Installation

Copier le **contenu de `skill/`** dans `~/.claude/skills/rgpd-ops/` (de sorte que `SKILL.md` soit à la racine de ce dossier) :

```bash
mkdir -p ~/.claude/skills/rgpd-ops
cp -R rgpd-ops/skill/* ~/.claude/skills/rgpd-ops/
```

Pour l'installer au niveau d'un **projet** : copier dans `./.claude/skills/rgpd-ops/` à la racine du projet.

---

## L'avertissement (parce que ça compte)

RGPD Ops est un **garde-fou d'ingénierie au moment du build**. Ce n'est **pas un conseil juridique**, ni une certification, et cela ne rend pas un abonnement Claude grand public (Pro/Max/Team) apte à traiter des données personnelles ou de santé (pas de DPA sur ces formules). Il réduit le risque de fuite en gardant la donnée perso hors de portée de l'IA et en ne la routant que via des sous-traitants couverts — la décision finale appartient à ton **DPO** ou à un **avocat**. Les décisions d'adéquation, le statut du DPF, les référentiels CNIL et les certifications évoluent : re-vérifier avant de s'appuyer dessus.

---

Fait pour BAAIR Solutions.
