<template_cartographie_flux>
## Cartographie des flux de données

> Où chaque donnée est collectée, où elle vit, qui la touche. Met en évidence le mur Voie 1 / Voie 2. À faire valider par le DPO.

**Projet :** _________  **Date :** _________

---

### Vue d'ensemble — les deux voies

```
   VOIE 1 — PAS DE DONNÉE PERSO          VOIE 2 — DONNÉE PERSO / SENSIBLE
   (l'IA construit + gère)               (sous-traitants couverts only)

   • _______________                     • _______________ (form natif couvert)
   • _______________                     • _______________ (hébergeur HDS si santé)
                                         • _______________ (paiement : champs hébergés)
```

### Flux détaillés

| # | Donnée | Sensible ? | Point de collecte | Où elle vit (Voie / outil) | Qui la touche | Sous-traitant(s) | Transfert hors UE | Durée |
|---|---|---|---|---|---|---|---|---|
| 1 | (ex. email) | non | formulaire contact | Voie 2 / Brevo | équipe support | Brevo (DPA ✅) | non | 3 ans |
| 2 | (ex. note de séance) | oui (santé) | form natif HDS | Voie 2 / hébergeur HDS | praticien | OVHcloud HDS (DPA ✅) | non | réf. CNIL santé |
| 3 | (ex. paiement) | non | Stripe Checkout | token chez Stripe | — | Stripe (DPA ✅) | US / DPF+SCC | durée légale |

### Points de vigilance

- L'IA touche-t-elle une ligne de Voie 2 ? → préciser l'endpoint couvert ou confirmer qu'elle reste dehors.
- Chaque sous-traitant a-t-il un DPA + transfert ? → renvoyer à la checklist DPA.
- Santé hors HDS quelque part ? → 🔴.

---

*Document de travail, pas un conseil juridique. À valider par le DPO / avocat.*
</template_cartographie_flux>
