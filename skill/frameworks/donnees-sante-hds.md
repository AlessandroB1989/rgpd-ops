<donnees_sante_hds_framework>
## But
Le cadre santé : quand l'hébergement de données de santé impose un hébergeur **certifié HDS**, comment HDS s'articule avec le RGPD et le secret médical, et le pattern d'architecture pour un SaaS santé. Se pose sur `rgpd.md` (Art. 9 — données sensibles) et `cnil-france.md`. Pour le lookup hébergeurs → `matrice-sous-traitants.md`.

Vérifié 2026-06. Le référentiel HDS et les certifications évoluent — re-vérifier la certification de chaque hébergeur sur son périmètre exact avant de s'appuyer dessus.

---

## Qu'est-ce qu'une donnée de santé

Toute donnée relative à l'état de santé physique ou mentale, passé/présent/futur, y compris par déduction (un rendez-vous chez un spécialiste, une donnée de bien-être qui révèle une pathologie, des notes de séance). C'est une **donnée sensible (Art. 9)** : interdiction de principe, base légale = le plus souvent **consentement explicite** ou prise en charge par un professionnel tenu au secret.

⚠️ Attention au périmètre : des apps "bien-être" (aromathérapie, suivi d'humeur, profil thérapeutique) peuvent basculer en **donnée de santé** dès qu'elles révèlent ou infèrent un état de santé. Dans le doute, traiter comme de la santé.

## La certification HDS (France)

**Héberger** des données de santé à caractère personnel (pour le compte d'un tiers, dans le cadre du soin/suivi) impose un **hébergeur certifié HDS** (Hébergeur de Données de Santé). La certification couvre des périmètres précis (infogérance, infrastructure, sauvegarde…) — vérifier que le **périmètre** du certificat couvre bien ton usage.

- HDS ≠ RGPD : c'est une **exigence française supplémentaire** sur l'hébergement, en plus de toutes les obligations RGPD.
- HDS porte sur l'**hébergement** (stockage, infra, sauvegarde, exploitation), pas sur chaque traitement applicatif. Tu restes responsable de la base légale, de la minimisation, des droits, etc.
- Le contrat avec l'hébergeur reste un **DPA Art. 28**, en plus du certificat HDS.

## Hébergeurs certifiés HDS (vérifier le périmètre)

- **OVHcloud** (FR), **Scaleway** (FR), **Outscale** (FR, aussi SecNumCloud), **Clever Cloud** (FR), **Cloud Temple**.
- **AWS, Microsoft Azure, Google Cloud** disposent d'offres certifiées HDS — **mais** prestataires US → **CLOUD Act** (voir `cnil-france.md`). Pour de la santé, c'est un vrai arbitrage souveraineté ; privilégier un hébergeur FR/UE non soumis au droit extra-UE quand c'est possible.

## Le pattern : SaaS santé, IA hors du chemin de la donnée de santé

**Voie 1 — Pas de donnée de santé (l'IA construit + gère) :** site vitrine, contenu, prise de RDV non médicalisée, SOP, code, maquettes. Aucune contrainte HDS.

**Voie 2 — Donnée de santé (vit uniquement dans l'environnement HDS) :** dossiers, notes de séance, formulaires cliniques, automatisations sur la santé. Hébergeur **certifié HDS** + DPA + base légale (consentement explicite) + journalisation des accès.

**Le pattern formulaire (critique) :** héberger le site vitrine sur un hébergeur normal, mais faire du **formulaire d'intake un formulaire natif de la plateforme HDS** (form embarqué/redirigé) pour que la donnée de santé aille **directement** dans l'environnement HDS sans toucher le serveur du site vitrine. Le site est le cadre ; la plateforme HDS est le coffre.

**Si l'IA doit traiter de la donnée de santé** (résumé de notes, aide à la saisie) : seulement via un endpoint commercial sous **DPA**, après **pseudonymisation/minimisation** en amont, et en gardant à l'esprit que le DPA d'un LLM **n'est pas une certification HDS** — l'hébergement de la donnée reste chez l'hébergeur HDS. Par défaut : garder l'IA dehors.

## Autres exigences santé à ne pas oublier

- **Secret médical** : s'ajoute au RGPD, n'est pas couvert par un simple DPA.
- **AIPD quasi systématique** (Art. 35) : traitement à grande échelle de données sensibles → analyse d'impact avant de construire.
- **DPO** souvent **obligatoire** (traitement à grande échelle de données de santé).
- **Durées de conservation** : suivre les référentiels CNIL santé ; ne pas inventer.

## Anti-patterns spécifiques santé

- **Héberger des données de santé hors d'un hébergeur certifié HDS** (un VPS lambda, un Notion, un Google Sheet) → non conforme, même si "c'est chiffré".
- **Croire qu'un DPA d'IA remplace l'HDS** → deux choses différentes ; l'hébergement reste HDS.
- **Envoyer des notes cliniques brutes à un LLM grand public** → fuite de donnée sensible + pas de DPA.
- **Sous-estimer le périmètre "santé"** d'une app bien-être qui infère un état de santé.

*Pas un conseil juridique ni un avis sur la qualification HDS. Confirmer avec un DPO / avocat et vérifier le périmètre du certificat HDS de l'hébergeur.*
</donnees_sante_hds_framework>
