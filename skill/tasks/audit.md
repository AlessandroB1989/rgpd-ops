<task_audit>
## But
Auditer un build / un flux de données **existant** pour repérer les écarts RGPD et les classer par gravité. Déclenché par `/rgpd-ops audit`.

Charge `frameworks/principes-rgpd.md` + les cadres des régimes concernés + `matrice-sous-traitants.md`.

---

## Étape 1 — Tracer le flux réel

Reconstituer le parcours de la donnée, de la collecte à la suppression :
- **Points de collecte** : formulaires, imports, API, cookies/traceurs.
- **Sous-traitants traversés** : hébergeur, CRM, email, analytics, paiement, IA, sauvegardes.
- **Stockages** : bases, fichiers, exports, tableurs, boîtes mail.
- **Sorties / transferts** : intégrations, transferts hors UE, accès tiers.
Inspecter le code/config si dispo (Glob/Grep) : variables d'env, endpoints tiers, SDK analytics, appels LLM, clés API.

## Étape 2 — Qualifier chaque traitement

Pour chaque traitement identifié :
- Données perso ? Sensibles (Art. 9) ?
- **Base légale** présente et documentée ?
- **Finalité** définie, **minimisation** respectée, **durée de conservation** fixée ?
- **Sous-traitant couvert** (DPA + transfert) ? → croiser `matrice-sous-traitants.md`.
- Santé → hébergeur **HDS** ? AIPD réalisée ?
- **Droits** des personnes réalisables (export, suppression) ?
- **Cookies** conformes (consentement préalable, refus aussi simple) ?

## Étape 3 — Classer les écarts

| Gravité | Critère |
|---|---|
| 🔴 Critique | Donnée sensible hors environnement couvert ; transfert hors UE sans mécanisme ; pas de base légale ; santé hors HDS ; PAN stocké en clair ; données perso brutes envoyées à un LLM grand public |
| 🟠 Majeur | Sous-traitant sans DPA ; cookies non conformes ; pas de durée de conservation ; droits non réalisables ; AIPD manquante alors qu'obligatoire |
| 🟡 Mineur | Mentions d'information incomplètes ; registre absent/partiel ; journalisation insuffisante ; minimisation perfectible |

## Étape 4 — Remédiation

Pour chaque écart : l'**action concrète** et l'alternative couverte (`matrice-sous-traitants.md`). Prioriser les 🔴. Distinguer ce qui se corrige par **architecture** (re-router la donnée) de ce qui relève du **contractuel/organisationnel** (signer un DPA, désigner un DPO, faire une AIPD) — ce dernier relève du DPO/avocat.

## Clôture
Synthèse : N critiques / N majeurs / N mineurs, top 3 actions. Proposer `/rgpd-ops document` pour formaliser. Terminer par le disclaimer (`frameworks/avertissement.md`).
</task_audit>
