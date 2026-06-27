<tripwires_rgpd>
## But
Les garde-fous pré-build, tous régimes. À dérouler **avant** de laisser Claude construire quelque chose qui touche des données personnelles. **Si l'un saute → STOP** : expliquer, et proposer l'alternative couverte avant de continuer.

---

## 🔴 STOP immédiat — ne pas construire en l'état

- [ ] **L'IA est sur le point de lire/écrire des données perso ou de santé brutes** sur un endpoint non couvert (formule grand public, ou sans DPA). → Minimiser/pseudonymiser, ou router via un endpoint commercial sous DPA, ou garder l'IA dehors.
- [ ] **Une donnée de santé irait ailleurs que chez un hébergeur certifié HDS** (VPS lambda, Notion, Google Sheet, Airtable…). → Environnement HDS only.
- [ ] **Un sous-traitant sans DPA** (ou un tableur/Notion) est branché sur de la Voie 2. → Outil couvert (cf. `matrice-sous-traitants.md`) ou form natif de la plateforme couverte.
- [ ] **Transfert hors UE sans mécanisme valide** (outil US sans DPF ni SCC). → Vérifier la couverture, ou choisir un équivalent UE.
- [ ] **Une finalité sans base légale** (Art. 6), ou **donnée sensible sans exception** (Art. 9). → Définir/justifier avant de collecter.
- [ ] **Le numéro de carte (PAN) transiterait par ton serveur** au lieu des champs hébergés du processeur. → Checkout/Elements hébergés.
- [ ] **Marketing/prospection B2C sans consentement** (opt-in). → Recueillir le consentement.

## 🟠 À traiter avant la mise en production

- [ ] **AIPD (Art. 35) requise et non faite** (santé à grande échelle, profilage, surveillance). → À mener avant.
- [ ] **Cookies/traceurs non essentiels sans consentement préalable**, ou bannière sans "Tout refuser" au même niveau.
- [ ] **Pas de durée de conservation** définie pour un traitement.
- [ ] **Droits non réalisables** : pas de moyen d'exporter (portabilité) ou de supprimer (effacement) un utilisateur.
- [ ] **Pas de mention d'information** (Art. 13-14) au point de collecte.
- [ ] **Analytics avec transfert US par défaut** (Google Analytics) sur un site FR sans mesure.
- [ ] **DPO non désigné** alors qu'obligatoire (santé à grande échelle, suivi systématique).

## 🟡 À documenter / améliorer

- [ ] **Registre des traitements** absent ou partiel.
- [ ] **Minimisation** perfectible (champs collectés "au cas où").
- [ ] **Journalisation des accès** insuffisante (utile pour les violations).
- [ ] **Chaîne de sous-traitants ultérieurs** non listée.

---

**Règle d'or :** dans le doute sur la sensibilité d'une donnée, la traiter comme sensible. Dans le doute sur la couverture d'un outil, ne pas l'utiliser pour de la Voie 2 tant que le DPA n'est pas confirmé.

*Pas un conseil juridique. Les tripwires réduisent le risque ; le DPO / avocat tranche.*
</tripwires_rgpd>
