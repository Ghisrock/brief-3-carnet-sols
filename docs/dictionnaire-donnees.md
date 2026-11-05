(  # Dictionnaire des données )

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ         | Signification                      | Type | Règle de validation | Unité     | Exemple |
| --------------| -----------------------------------| ------| ----------         | --- | --- |---------|----
| `id`          | Identifiant unique                 | texte | non vide, absent des données | — | S04 |
|'parcelle'     |   parcelle où se trouve le sol     | texte |  non vide          |aucune     | P2 |  
| 'texture'     | classe de texture du sol au toucher|texte  |argileux,sableux,limoneux |aucune|sableux|
| 'pH'          | Acidité mesurée du sol             |nombre |compris entre 0 et 14 |aucune  |10 |
| 'etatHumidité | Humidité du sol au moment du relévé|texte  |humide, intermediare,sec |aucune |sec |

**Listes de valeurs autorisées** : 
- 'texture': 'sableux' ; 'limoneux' ; 'argileux'
- 'etatHumidité' : 'sec' ; 'intermediaire' ; 'humide'

**Sources** :   fiche de terrain ;données fictives de observation.json
