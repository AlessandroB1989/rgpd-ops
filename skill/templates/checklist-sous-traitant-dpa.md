<template_checklist_dpa>
## Checklist sous-traitants & DPA (Art. 28)

> Un sous-traitant par ligne. Statut du contrat de sous-traitance, transfert, HDS (si santé). À faire valider par le DPO.

**Projet :** _________  **Date :** _________

| Sous-traitant | Rôle (ce qu'il traite) | Données perso ? | Sensible/santé ? | DPA | Transfert hors UE + mécanisme | HDS (si santé) | Souveraineté | Page conformité | Action |
|---|---|---|---|---|---|---|---|---|---|
| (ex. OVHcloud) | hébergement | oui | santé | ✅ signé | non (UE) | ✅ certifié | 🇪🇺 | ovhcloud.com/.../hds | — |
| (ex. Brevo) | email | oui | non | ⬜ à demander | non (UE) | n/a | 🇪🇺 | brevo.com/.../gdpr | demander DPA |
| (ex. Stripe) | paiement | oui (token) | non | ✅ signé | US / DPF + SCC | n/a | 🇺🇸 | stripe.com/.../dpa | — |
| (ex. Anthropic API) | IA | ⚠️ minimisé | non (jamais santé brute) | ✅ intégré | US / SCC | n/a | 🇺🇸 | anthropic.com/.../dpa | pseudonymiser en amont |

### Légende
- **DPA** : ✅ signé · ⬜ à demander · n/a (pas de perso / chez toi)
- **Transfert** : non (UE) · pays + mécanisme (adéquation / DPF / SCC / BCR)
- **HDS** : ✅ certifié (vérifier le périmètre) · n/a · ❌ (à corriger si santé)
- **Souveraineté** : 🇪🇺 hors CLOUD Act · 🇺🇸 soumis CLOUD Act

### À porter au DPO
- Sous-traitants sans DPA signé : _________
- Transferts hors UE sans mécanisme : _________
- Santé hors hébergeur HDS : _________

---

*Document de travail, pas un conseil juridique. À valider par le DPO / avocat.*
</template_checklist_dpa>
