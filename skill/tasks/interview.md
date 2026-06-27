<task_interview>
## But
La tâche par défaut. Interroger l'utilisateur avant de laisser Claude construire quoi que ce soit qui pourrait toucher des données personnelles, charger le bon cadre, et garder le build correct-par-défaut.

Charge toujours `frameworks/principes-rgpd.md`. Charge ensuite le(s) cadre(s) qui matche(nt) la réponse.

---

## Étape 1 — Les deux questions

Poser, via AskUserQuestion si utile :

1. **Qu'est-ce qu'on construit ?** (site vitrine, formulaire d'intake, CRM, checkout, automatisation, SaaS complet…)
2. **Quelles données ça touche ?**
   - Données perso d'utilisateurs UE (nom, email, compte) → `rgpd.md` + `cnil-france.md`
   - **Données de santé / sensibles** → `rgpd.md` (Art. 9) + `donnees-sante-hds.md` + `cnil-france.md`
   - Données RH / salariés → `rgpd.md` + référentiel CNIL RH
   - Paiements → `matrice-sous-traitants.md` (section paiement)
   - "Pas sûr" → poser 2-3 questions de cadrage (qui sont les personnes, quelles infos, pour quoi faire)

Plusieurs réponses possibles (un SaaS santé UE avec paiement déclenche tout).

## Étape 2 — Charger le cadre et qualifier

Pour chaque régime détecté :
- Identifier **base légale** (Art. 6), et si **données sensibles** (Art. 9 → exception requise).
- Décider Voie 1 / Voie 2 pour chaque composant (cf. `principes-rgpd.md`).
- Lister les **sous-traitants** envisagés → vérifier chacun dans `matrice-sous-traitants.md` (DPA + transfert + HDS/souveraineté).
- Vérifier si une **AIPD** (Art. 35) est requise (santé à grande échelle, profilage, surveillance).

## Étape 3 — Passer les tripwires AVANT de construire

Dérouler `checklists/tripwires-rgpd.md`. Si l'un saute → **STOP**, expliquer, proposer l'alternative couverte. Cas typiques :
- L'IA est sur le point de lire des données perso/santé brutes.
- Un outil sans DPA (ou un Sheet/Notion) est branché sur de la Voie 2.
- Une donnée de santé irait ailleurs que chez un hébergeur HDS.
- Un transfert hors UE sans mécanisme valide.
- Une finalité sans base légale, ou un consentement non conforme.

## Étape 4 — Concevoir correct-par-défaut

- Séparer le perso/sensible dans sa propre Voie 2, routé seulement via des sous-traitants couverts.
- Appliquer le **pattern formulaire natif** (intake direct dans l'environnement couvert / HDS).
- Pour le paiement, **champs hébergés** du processeur.
- **Minimiser** : ne collecter/transmettre que le nécessaire ; pseudonymiser avant l'IA.
- Garder l'IA **hors Voie 2** sauf endpoint commercial sous DPA explicitement choisi.

## Étape 5 — Tracer

Proposer de générer le registre + la cartographie + la checklist DPA (`tasks/document.md`). Au minimum, lister les sous-traitants retenus et leur couverture.

## Clôture
Terminer par le disclaimer de `frameworks/avertissement.md`.
</task_interview>
