<task_document>
## But
Générer la documentation à remettre à un DPO / avocat : le **registre des traitements (Art. 30)**, la **cartographie des flux**, et la **checklist DPA sous-traitants**. Déclenché par `/rgpd-ops document`.

Charge les templates : `templates/registre-traitements.md`, `templates/cartographie-flux.md`, `templates/checklist-sous-traitant-dpa.md`. S'appuie sur ce qui a été établi en interview/audit.

---

## Étape 1 — Rassembler les éléments

Reprendre, depuis l'interview/audit ou en interrogeant :
- Responsable de traitement + DPO (si désigné).
- Liste des **traitements** (une ligne par finalité).
- Liste des **sous-traitants** et leur couverture (DPA, transfert, HDS).
- Catégories de données, de personnes, durées de conservation, base légale.

## Étape 2 — Remplir le registre des traitements

Suivre `templates/registre-traitements.md`. Une entrée par finalité : finalité, base légale, catégories de données (dont sensibles), catégories de personnes, destinataires/sous-traitants, transferts hors UE + mécanisme, durée de conservation, mesures de sécurité.

## Étape 3 — Remplir la cartographie des flux

Suivre `templates/cartographie-flux.md` : où chaque donnée est collectée, où elle vit (Voie 1 / Voie 2), qui la touche, quels sous-traitants, quels transferts. Mettre en évidence le mur Voie 1 / Voie 2 et le pattern formulaire/HDS.

## Étape 4 — Remplir la checklist DPA

Suivre `templates/checklist-sous-traitant-dpa.md` : un sous-traitant par ligne, statut DPA (signé / à demander / N/A), transfert + mécanisme, HDS si santé, lien vers la page conformité.

## Étape 5 — Signaler les trous

Marquer explicitement ce qui manque : DPA non signés, base légale absente, durée non définie, AIPD requise non faite, sous-traitant hors UE sans mécanisme. Ce sont les points à porter au DPO/avocat.

## Sortie
Écrire les trois documents (Markdown) dans le dossier du projet courant si pertinent, ou les présenter dans la réponse. Terminer par le disclaimer (`frameworks/avertissement.md`).
</task_document>
