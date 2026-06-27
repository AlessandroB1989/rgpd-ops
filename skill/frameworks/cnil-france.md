<cnil_france_framework>
## But
Les spécificités françaises qui se posent sur le RGPD : la CNIL, la souveraineté (CLOUD Act / SecNumCloud), les cookies & traceurs (ePrivacy), le DPO. Se pose sur `rgpd.md`. Pour la santé → `donnees-sante-hds.md`.

Vérifié 2026-06. Les référentiels et lignes directrices CNIL évoluent — re-vérifier sur cnil.fr avant de s'appuyer dessus.

---

## La CNIL

Autorité de contrôle française. Au-delà du contrôle/sanction, elle publie des outils opérationnels à privilégier :
- **Référentiels** sectoriels (gestion clients/prospects, RH, santé…) qui fixent les durées de conservation et finalités admises.
- **Modèles de mentions d'information** et de registre.
- **Lignes directrices et recommandation cookies**.
- Liste des traitements **soumis à AIPD**.
Réflexe : quand une durée de conservation ou une finalité est en jeu, vérifier s'il existe un référentiel CNIL qui la cadre.

## Souveraineté : le CLOUD Act et SecNumCloud

- **CLOUD Act (US)** : un prestataire soumis au droit américain (AWS, Microsoft, Google, et leurs filiales) peut être contraint de livrer des données **même hébergées en région UE**. Le DPF/SCC encadre le transfert contractuel mais ne neutralise pas ce risque d'accès.
- Pour les données **sensibles, stratégiques ou publiques**, viser un cloud non soumis au droit extra-UE :
  - **SecNumCloud** (qualification ANSSI) : cloud de confiance — ex. OVHcloud (offres qualifiées), Outscale, Scaleway (selon offres), Cloud Temple.
  - Pour la santé, croiser avec **HDS** (voir `donnees-sante-hds.md`).
- Réflexe d'architecture : plus la donnée est sensible, plus on pousse vers un hébergeur **UE non soumis au CLOUD Act**, et on documente le choix.

## Cookies & traceurs (ePrivacy + lignes directrices CNIL)

- **Consentement préalable** pour tout traceur **non essentiel** (analytics non exemptés, publicité, réseaux sociaux). Déposé **avant** lecture/écriture.
- **Refuser doit être aussi simple qu'accepter** : bouton "Tout refuser" au même niveau que "Tout accepter". Pas de cases pré-cochées, pas de cookie wall abusif.
- **Preuve du consentement** conservée ; durée de validité ~6 mois recommandée avant de re-solliciter.
- **Exemptés de consentement** (si correctement configurés) : mesure d'audience strictement nécessaire (ex. **Matomo** en mode exempté), panier, authentification, préférences.
- Réflexe build : préférer une **analytics sans cookie / EU** (Matomo self-host, Plausible) pour éviter la bannière et le transfert. Google Analytics a fait l'objet de mises en demeure CNIL (transferts US) → à éviter ou à proxifier, et jamais comme choix par défaut sur un site FR.

## Le DPO (Délégué à la Protection des Données, Art. 37-39)

**Obligatoire** si : organisme public ; **ou** suivi régulier et systématique à grande échelle ; **ou** traitement à grande échelle de **données sensibles** (santé). Sinon recommandé. Le DPO est le point de contact CNIL, tient/supervise le registre, conseille sur les AIPD. → Un SaaS santé à grande échelle entre typiquement dans l'obligation.

## Marketing & prospection (règles FR)

- **B2C** : email/SMS de prospection = **consentement préalable** (opt-in), sauf clients existants pour produits analogues (soft opt-in) avec opposition facile.
- **B2B** : information + droit d'opposition, prospection liée à la fonction professionnelle.
- Toujours un lien de désinscription fonctionnel et une base de désabonnés respectée.

## Anti-patterns spécifiques France

- **"Hébergé en Europe donc souverain"** alors que le prestataire est US → CLOUD Act ignoré.
- **Bannière cookie sans "Tout refuser"** au même niveau → non conforme aux lignes directrices CNIL.
- **Google Analytics par défaut** sur un site FR sans mesure de transfert → risque déjà sanctionné.
- **Pas de DPO** alors qu'on traite de la santé à grande échelle.
- **Durées de conservation inventées** alors qu'un référentiel CNIL existe pour le secteur.

*Pas un conseil juridique. Confirmer avec un DPO / avocat et vérifier les référentiels CNIL applicables.*
</cnil_france_framework>
