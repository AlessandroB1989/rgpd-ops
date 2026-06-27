<rgpd_framework>
## But
Le détail RGPD : bases légales, données sensibles, droits des personnes, transferts hors UE, AIPD, violations. Se pose sur `principes-rgpd.md`. Pour la France (CNIL, HDS, cookies, souveraineté) → `cnil-france.md`. Pour le lookup par outil → `matrice-sous-traitants.md`.

Référence : Règlement (UE) 2016/679 (RGPD), applicable depuis le 25 mai 2018. Vérifié 2026-06 ; les décisions d'adéquation et le statut du DPF évoluent — re-vérifier avant de s'appuyer dessus.

---

## Responsable de traitement vs sous-traitant

- **Responsable de traitement (controller)** : décide des finalités et des moyens. C'est toi / ton client pour son SaaS.
- **Sous-traitant (processor, Art. 28)** : traite pour le compte du responsable (hébergeur, CRM, email, analytics, API d'IA). Doit être lié par un **contrat de sous-traitance (DPA)** qui impose : agir sur instruction, confidentialité, sécurité, sous-traitants ultérieurs encadrés, assistance aux droits, suppression/restitution en fin de contrat, audit.
- Un **sous-traitant ultérieur** (le sous-traitant de ton sous-traitant) doit être répercuté dans la chaîne contractuelle et listé.

## Les 6 bases légales (Art. 6) — il en faut exactement une par finalité

1. **Consentement** — libre, spécifique, éclairé, univoque ; retirable aussi facilement que donné. Obligatoire pour le marketing direct par email B2C, les cookies non essentiels, et (sous forme **explicite**) la plupart des données sensibles.
2. **Exécution d'un contrat** — la donnée est nécessaire pour fournir le service demandé (ex. email pour livrer un compte).
3. **Obligation légale** — comptabilité, paie, obligations sectorielles.
4. **Intérêts vitaux** — vie ou intégrité physique d'une personne.
5. **Mission d'intérêt public** — surtout secteur public.
6. **Intérêt légitime** — possible (ex. sécurité, prévention fraude, certaines analyses) mais exige un **test de mise en balance** documenté ; ne couvre pas les données sensibles.

## Données sensibles (Art. 9)

Interdiction de principe de traiter : santé, origine, opinions politiques/philosophiques/religieuses, appartenance syndicale, orientation sexuelle, vie sexuelle, données génétiques, biométriques (à des fins d'identification). Exceptions : **consentement explicite**, médecine/soins par un professionnel tenu au secret, obligation en droit du travail, etc. → si ton SaaS touche de la santé, c'est ici + `donnees-sante-hds.md`.

## Principes (Art. 5) — à respecter dans l'architecture

Licéité/loyauté/transparence · limitation des finalités · **minimisation** · exactitude · **limitation de conservation** (durée définie par finalité) · intégrité et confidentialité (sécurité) · **responsabilité** (accountability : pouvoir le prouver).

## Droits des personnes — le système doit pouvoir les honorer

Information (Art. 13-14) · accès (Art. 15) · rectification (Art. 16) · **effacement / droit à l'oubli** (Art. 17) · limitation (Art. 18) · **portabilité** (Art. 20, format structuré réutilisable) · opposition (Art. 21) · pas de décision entièrement automatisée à effet significatif sans garde-fous (Art. 22). Délai de réponse : **1 mois**. → concevoir dès le départ l'export et la suppression d'un utilisateur.

## Transferts hors UE/EEE (Chapitre V)

Une donnée ne quitte l'UE que via l'un de :
- **Décision d'adéquation** (Art. 45) — le pays offre un niveau adéquat (Suisse, Canada secteur privé, Japon, Royaume-Uni, etc.).
- **EU-US Data Privacy Framework (DPF)** — adéquation depuis juillet 2023 pour les **entreprises US certifiées DPF** (vérifier la certification de l'outil sur la liste DPF). Statut juridiquement contesté → ne pas en faire l'unique filet ; combiner avec des CCT quand c'est possible.
- **Clauses Contractuelles Types / SCC** (Art. 46) — le contrat de référence ; souvent + analyse d'impact des transferts (TIA) post-Schrems II.
- **BCR** (Art. 47) — règles d'entreprise contraignantes, pour les grands groupes.

**Angle mort** : héberger en région UE d'un prestataire **US** ne neutralise pas le CLOUD Act → voir souveraineté dans `cnil-france.md`.

## AIPD / DPIA (Art. 35)

Obligatoire quand le traitement est susceptible d'engendrer un **risque élevé** : traitement à grande échelle de données sensibles (santé !), surveillance systématique, profilage à effet significatif, croisement de données, données de personnes vulnérables. La CNIL publie une liste des traitements qui l'exigent. À mener **avant** de construire ; si le risque résiduel reste élevé → consultation préalable de la CNIL.

## Violation de données (Art. 33-34)

- Notification à la **CNIL sous 72h** dès la prise de connaissance, sauf risque négligeable.
- Notification **aux personnes** si risque élevé pour leurs droits.
- → prévoir journalisation et procédure d'incident dans l'architecture.

## Sanctions

Jusqu'à **20 M€ ou 4 % du CA mondial annuel** (le plus élevé). Au-delà de l'amende : mise en demeure CNIL, atteinte réputationnelle, blocage de procédures d'achat B2B.

## Anti-patterns spécifiques RGPD

- **Pas de base légale identifiée** pour une finalité → traitement illicite, même avec un beau DPA.
- **Consentement "forcé"** (cases pré-cochées, refus impossible, mur de cookies) → invalide.
- **Transfert hors UE sans mécanisme** (outil US sans DPF ni SCC) → illicite.
- **Pas de durée de conservation** → non-conformité permanente.
- **Envoyer du perso brut à un LLM** sans minimiser/pseudonymiser et sans DPA → fuite + transfert non couvert.

*Pas un conseil juridique. Confirmer avec un DPO / avocat avant tout traitement de données personnelles.*
</rgpd_framework>
