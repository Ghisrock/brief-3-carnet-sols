# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. 
A partir des 10 observations de données/observation.json
- pH min : 4.8 (S04);pHmax 7.6 (S08)
- Nombre par texture : 3 sableux ; 4 limoneux ; 3 argileux
- points avec pH < 5.5 : S01,S04,S06,S09

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action        | Attendu                       | Obtenu               | Testeur       |
| --------------| ----------------------------- | ---------------------|---------------|
| ajout valide  |l'observation doit etre ajoutée|                      |               |
| chaque regle refusée | aucune observation enregistré |               |               |
| une recherche intriuvable | introuvable |                            |               |
| chaque tri (pH croissant) |tri avec succès|                          |               |
| la synthèse |affichage des statistique de l'observation |            |               |
| choix inconnu  | aucune observation |                                |               |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️

