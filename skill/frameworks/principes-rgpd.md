<principes_rgpd>
## But
Le tronc commun, indépendant du cas précis : le flux de décision que RGPD Ops applique avant de laisser quoi que ce soit se construire. Les cadres spécifiques (`rgpd.md`, `cnil-france.md`, `donnees-sante-hds.md`) se posent par-dessus. À coupler avec `matrice-sous-traitants.md` pour le lookup par outil.

---

## Le flux de décision (dans l'ordre)

**Principe 1 — Y a-t-il des données personnelles en jeu ?**
Donnée personnelle = toute information se rapportant à une personne physique identifiée ou identifiable (nom, email, IP, identifiant, localisation, photo…). Si non → pas de RGPD pour ce traitement, l'IA travaille librement. Si oui → on continue.

**Principe 2 — Est-ce une donnée *sensible* (Art. 9) ?**
Santé, origine raciale/ethnique, opinions politiques/religieuses, orientation sexuelle, biométrie, données génétiques, condamnations. Interdiction de principe, sauf exception (consentement explicite, etc.). Les données de santé déclenchent en plus l'enjeu **HDS** en France → `donnees-sante-hds.md`.

**Principe 3 — Quelle est la base légale (Art. 6) ?**
Tout traitement doit reposer sur l'une des 6 : consentement, exécution d'un contrat, obligation légale, intérêts vitaux, mission d'intérêt public, intérêt légitime. Pas de base légale = pas de traitement. À documenter, finalité par finalité.

**Principe 4 — Minimiser (Art. 5).**
Ne collecter et ne faire transiter que le strict nécessaire à la finalité. Le réflexe par défaut : pseudonymiser ou anonymiser avant que la donnée n'atteigne un outil tiers — surtout un LLM.

**Principe 5 — Tout sous-traitant qui touche du perso doit être couvert.**
Un sous-traitant (Art. 28) = toute entité qui traite des données pour ton compte (hébergeur, email, CRM, analytics, IA…). Il lui faut un **DPA signé**. S'il est hors UE, il faut en plus un **mécanisme de transfert valide** (adéquation, CCT/SCC, BCR — voir `rgpd.md`). Pas de DPA = la donnée ne passe pas par lui.

**Principe 6 — Garder l'IA hors du chemin des données sensibles par défaut.**
Sauf décision délibérée de la router vers un endpoint couvert (API commerciale sous DPA), l'IA construit et gère tout *autour* des données personnelles sans jamais les voir. Quand l'IA doit vraiment traiter du perso : endpoint commercial sous DPA + minimisation/pseudonymisation en amont. Jamais via une formule grand public.

**Principe 7 — Documenter la frontière.**
Registre des traitements (Art. 30), cartographie des flux, checklist DPA. Si un traitement est à risque élevé → AIPD/DPIA (Art. 35) avant de construire.

---

## Le pattern par défaut : les deux voies

```
   VOIE 1 — PAS DE DONNÉE PERSO          VOIE 2 — DONNÉE PERSO / SENSIBLE
   (l'IA construit + gère librement)     (vit uniquement chez des sous-traitants couverts)

   • Site vitrine / marketing            • Formulaire d'intake (form natif couvert)
   • Contenu, code, SOP                  • Comptes, dossiers, données de santé
   • Lead-gen non nominatif              • Automatisations sur du perso
   • Maquettes, docs internes            • Paiements (PAN jamais stocké)

   Aucun contrat requis.                 Couvert par le bon contrat : DPA Art. 28
   L'IA travaille librement ici.         + base légale + transfert valide
                                         (+ hébergeur HDS si santé).
                                         L'IA n'entre que sur un endpoint couvert.
```

Tout le métier de RGPD Ops : maintenir ce mur debout, et le prouver sur le papier (registre + flux + DPA).

---

## Ce qui fait tomber le mur (anti-patterns universels)

- Faire passer du perso par un outil sans DPA "parce que c'est pratique".
- Laisser l'IA lire un export de données "juste pour aider" → met du perso sur un endpoint non couvert.
- Collecter "au cas où" → viole la minimisation et la limitation des finalités.
- Héberger en UE et croire que ça suffit → un prestataire US reste soumis au CLOUD Act (voir `cnil-france.md`).
- Oublier la durée de conservation → une donnée gardée sans limite est une non-conformité en soi.

*Pas un conseil juridique. Faire valider l'architecture par un DPO / avocat avant que des données personnelles ne circulent.*
</principes_rgpd>
