<matrice_sous_traitants>
## But
Le lookup par outil, orienté FR/UE : quels sous-traitants courants (hébergement, IA, email, analytics, CRM/automatisation, paiement) portent un **DPA**, un **transfert valide** (adéquation / DPF / SCC), et un **statut HDS / souveraineté**. C'est la table que RGPD Ops vérifie avant de laisser un outil entrer dans la Voie 2 (données perso).

**Le contrat à obtenir, toujours :** un **DPA (contrat de sous-traitance Art. 28)**. Si l'outil est hors UE, **+ un mécanisme de transfert** (décision d'adéquation, EU-US **DPF** pour les sociétés US certifiées, ou **SCC/CCT**).

**Vérifier avant de s'appuyer dessus.** Politiques, prix, certifications et certification DPF changent. Confirmer sur la page conformité/trust de l'éditeur. Dernière vérif : 2026-06. Légende : ✅ oui · ⚠️ sous conditions · ❌ non · 🇪🇺 hors CLOUD Act · 🇺🇸 soumis CLOUD Act.

---

## Hébergement / infra

| Outil | DPA | Transfert | HDS | Souveraineté | Notes |
|---|---|---|---|---|---|
| **OVHcloud** | ✅ | UE | ✅ (offres HDS) | 🇪🇺 (SecNumCloud sur offres qualifiées) | Hébergeur FR de référence pour santé/souverain |
| **Scaleway** | ✅ | UE | ✅ (offres HDS) | 🇪🇺 | FR, régions UE |
| **Outscale (Dassault)** | ✅ | UE | ✅ | 🇪🇺 SecNumCloud | Cloud de confiance |
| **Clever Cloud** | ✅ | UE | ✅ | 🇪🇺 | PaaS FR |
| **Vercel** | ✅ | 🇺🇸 DPF + SCC | ❌ | 🇺🇸 | Pratique pour la Voie 1 ; éviter pour santé |
| **Supabase** | ✅ DPA + SCC | choisir région UE | ❌ | 🇺🇸 (société US) | Pin région UE ; CLOUD Act applicable |
| **AWS / Azure / GCP** | ✅ | DPF + SCC | ✅ (offres certifiées HDS) | 🇺🇸 | HDS possible mais CLOUD Act → arbitrage souveraineté |

## IA / endpoints modèles

| Outil | DPA | Transfert | Données perso ? | Notes |
|---|---|---|---|---|
| **Anthropic API** (commerciale) | ✅ DPA intégré | 🇺🇸 SCC (Mod. 2+3) | ⚠️ OK avec DPA + minimisation | Client = responsable, Anthropic = sous-traitant ; **pas d'entraînement par défaut** |
| **Claude via AWS Bedrock / GCP Vertex** | ✅ (DPA du cloud) | selon région | ⚠️ | Inférence dans ton périmètre cloud ; vérifier région UE |
| **Claude Pro / Max / Team (grand public)** | ❌ pas de DPA | — | ❌ | **Ne jamais** router de données perso/santé via le grand public |
| **OpenAI API** (commerciale) | ✅ DPA | 🇺🇸 SCC | ⚠️ | Idem : DPA + minimisation ; vérifier conservation |
| **Mistral AI** | ✅ DPA | 🇪🇺 | ⚠️ | Éditeur FR/UE — atout souveraineté pour du perso UE |

➡️ Réflexe IA : **pseudonymiser/minimiser avant l'envoi**, DPA obligatoire, jamais de donnée de santé brute, jamais via le grand public. L'IA reste hors Voie 2 par défaut.

## Email transactionnel / marketing

| Outil | DPA | Transfert | Souveraineté | Notes |
|---|---|---|---|---|
| **Brevo (ex-Sendinblue)** | ✅ | 🇪🇺 | 🇪🇺 (FR) | Transactionnel + marketing, UE |
| **Mailjet** | ✅ | 🇪🇺 | 🇪🇺 (FR) | UE |
| **Scaleway TEM** | ✅ | 🇪🇺 | 🇪🇺 | Email FR |
| **Postmark / SendGrid / Mailchimp** | ✅ | 🇺🇸 DPF + SCC | 🇺🇸 | OK avec DPA ; préférer UE pour du B2C FR |

## Analytics

| Outil | DPA | Cookie/consentement | Souveraineté | Notes |
|---|---|---|---|---|
| **Matomo (self-host)** | n/a (chez toi) | exempté de consentement si configuré CNIL | 🇪🇺 | Le choix par défaut sans bannière |
| **Plausible** | ✅ | sans cookie | 🇪🇺 (UE) | Léger, sans données perso identifiantes |
| **Google Analytics** | ✅ | consentement requis | 🇺🇸 | Mises en demeure CNIL (transferts) → **éviter par défaut** |

## CRM / automatisation

| Outil | DPA | Transfert | Données santé ? | Notes |
|---|---|---|---|---|
| **n8n (self-host UE)** | n/a (chez toi) | UE | ⚠️ possible si infra HDS | Tu portes les contrôles (rétention, accès) |
| **Make / Zapier** | ✅ DPA | 🇺🇸 DPF + SCC | ❌ pour santé | OK pour du perso non sensible avec DPA ; **jamais de santé** |
| **HubSpot / Pipedrive** | ✅ | 🇺🇸 DPF + SCC | ❌ santé | CRM perso non sensible ; documenter en sous-traitant |
| **Brevo / Axonaut (FR)** | ✅ | 🇪🇺 | ❌ santé sauf offre dédiée | CRM UE |

## Paiement (l'enjeu : ne jamais toucher le numéro de carte)

| Processeur | DPA | Champs hébergés / tokenisation | Notes |
|---|---|---|---|
| **Stripe** | ✅ | Checkout (redirection) / Elements (champs hébergés) | PAN jamais sur ton serveur ; tu stockes token + 4 derniers chiffres |
| **Stancer (FR)** | ✅ | champs hébergés | Processeur FR |
| **Lemonway / Mangopay (FR)** | ✅ | flux hébergé | Marketplace/paiement FR |
| **PayPal / Adyen** | ✅ | hosted fields / redirect | Idem |

➡️ Réflexe paiement : champs hébergés/redirection du processeur → la carte ne transite jamais par ton environnement, l'IA non plus. Tu ne stockes que le token.

---

## Comment utiliser cette table

1. **Identifier le régime** depuis l'interview : perso "simple", **sensible/santé** (Art. 9), paiement, EU-US.
2. **Tout outil en Voie 2 doit avoir un DPA** + un transfert valide s'il est hors UE.
3. Un **❌ santé** (Make, Zapier, HubSpot…) peut rester OK pour du **perso non sensible** avec DPA — jamais pour de la **santé**. Matcher la colonne au régime.
4. **Santé** → hébergeur **certifié HDS** (vérifier le périmètre) ; privilégier 🇪🇺 hors CLOUD Act.
5. **Souveraineté** : plus la donnée est sensible/stratégique, plus on pousse vers 🇪🇺 (SecNumCloud / FR) plutôt que 🇺🇸 même DPF.
6. **L'hébergeur du site vitrine peut rester hors Voie 2** si un **formulaire natif couvert** (ou un champ de paiement hébergé) porte la donnée → il n'a alors besoin d'aucun contrat (le moins cher).
7. **La couverture, c'est la part du sous-traitant seulement.** Tu gardes : base légale, minimisation, durées de conservation, droits des personnes, journalisation, chaîne contractuelle.

## Heuristiques de routage

- **Intake santé** → formulaire natif d'une plateforme **HDS**. Jamais Make/Zapier/Sheet.
- **Perso non sensible (newsletter, CRM)** → Brevo/Mailjet/n8n UE *avec DPA* ; documenter en sous-traitant.
- **Utilisateurs UE** → préférer régions/éditeurs UE ; DPA + DPF/SCC pour chaque outil ; pseudonymiser avant l'IA.
- **Paiement** → champs hébergés du processeur ; stocker token + 4 derniers chiffres ; l'IA ne voit jamais le PAN.
- **L'IA doit lire du perso** → endpoint commercial sous DPA (Anthropic/Mistral/Bedrock), minimisé. Jamais le grand public, jamais de santé brute.

*Pas un conseil juridique. Confirmer les termes de chaque sous-traitant + ton architecture avec un DPO / avocat avant que des données ne circulent.*
</matrice_sous_traitants>
