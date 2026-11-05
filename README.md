# Carnet d'observation des sols

> Projet individuel du SAS DFS, brief 3 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

l'outil est utiliseé par un technicien agricole ou un conseiller en agronomie lors de ses tournées parcelles.Son besoin est de centraliser rapidement ses relevés de sol .il saisit pour chaque point une observation avec : un id , la parcelle, la texture au toucher ,le pH mesuré et l'état d'état d'humidité.le programme lui affiche la liste de ses observations , permet de flitrer par texture ou parcelle,de trier par pH et d'obtenir une synthèse rapide avec le pH min/max et les points acides à discuter.l'outil repère des valeurs à discuter, mais ne produit aucun diagnostic de fertilisation.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-3-carnet-sols.git
cd brief-3-carnet-sols
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

 *Cochez seulement ce qui marche : `- [x]`.*

- [x] Données lues et enregistrées dans `donnees/observations.json`
- [x] Ajouter une observation, saisies invalides refusées sans arrêter le programme
- [x] Lister les observations, message si le carnet est vide
- [x] Rechercher par point ou par parcelle ; filtrer par texture
- [x] Trier par pH
- [x] Synthèse : pH minimum et maximum, nombre par texture, points à discuter (pH < 5,5)
- [x] Bonus : supprimer et modifier une observation (choix 6 et 7)
- [x] Bonus : tri par pH décroissant, texture la plus fréquente

## Données

  *Le fichier, le nombre d'observations, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), le pH sans unité. Rappelez qu'elles sont fictives.*


 Champ          |       contenu                      | Type  | Exemple |
| --------------| -----------------------------------| ------| ---------
| `id`          | Identifiant unique                 | texte | S04     |
|'parcelle'     |   parcelle où se trouve le sol     | texte | P2      |  
| 'texture'     | classe de texture du sol au toucher|texte  |argileux,sableux,limoneux |
| 'pH'          | Acidité mesurée du sol             |nombre |compris entre 0 et 14 |
| 'etatHumidité | Humidité du sol au moment du relévé|texte  |sec ,humide ,intermediaire|

## Limites

 - Les données étant fictives , les résultats ne peuvent pas etre généralisés à des sols réels.
- Des facteurs importants ( type de sol ,culture ,saison ,date de prélèvement,etc...) ne figurent pas dans les champs et ne sont pas pris en compte.
- L'échantillon est limité à 10 observations, ce qui ne permet pas de conclusions statiquement solides.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

 *Prénom NOM : Ghislain OBA ,
    compte Github : Ghisrock . 
    Entraide : échange avec KOKO KOUAME RABIN et N'DIAMDI JULES CHRIST , sur la comprehension du projet , comment l'aborder ,sur modifier Observation et la partie renvoie des pH min et max.*