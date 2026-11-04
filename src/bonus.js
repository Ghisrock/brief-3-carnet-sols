// BONUS — Pour aller plus loin. Facultatif : commencez seulement quand le socle est complet.
// Fiche : fiches/7-bonus.md · Vérifier : npm run test:bonus
// Ni pseudo-code de référence ni aide détaillée : à vous de combiner ce que vous avez appris.
// Les choix 6 et 7 du menu sont à écrire vous-même dans app.js (voir la fiche).
import { versNombre } from './outils.js';
import { trouverParId, verifierObservation } from './registre.js';
import { compterParTexture } from './synthese.js';

// Les champs qu'on a le droit de modifier. L'identifiant n'en fait pas partie.
export const CHAMPS_MODIFIABLES = ['parcelle', 'texture', 'pH', 'etatHumidite'];

// Supprime du carnet l'observation qui a cet identifiant.
// Renvoie l'observation supprimée, ou undefined si elle n'existe pas (le carnet ne change pas).
export function supprimerObservation(observations, id) {
  const index = observations.findIndex(observation => observation.id === id);
  if ( index === -1){
    return undefined;
  } else {
    const [supprime]= observations.splice (index,1);
  return supprime;
  }
}
// Modifie UN champ d'une observation. La nouvelle valeur arrive sous forme de TEXTE et suit
// les mêmes règles qu'à l'ajout. Renvoie les erreurs : [] si la modification est faite ;
// sinon les messages, et l'observation ne change pas. Le pH modifié est enregistré comme un nombre.
// Erreurs : identifiant introuvable · champ 'id' (non modifiable) · champ absent de CHAMPS_MODIFIABLES
//           · valeur refusée par les règles de l'ajout.
export function modifierObservation(observations, id, champ, valeur) {
  if ( champ === 'id'){
    return [ "le champ 'id' (non modifiable)"];
  }
  let trouve = null;
  for ( let observation of observations){
    if( observation.id === id) trouve = observation;
  }
  if(trouve===null){
    return ["identifiant introuvable"];
  }
  if (champ ==='pH'){
    valeur = versNombre(valeur);
  }
  let copie = {...trouve};
  copie[champ]=valeur;
  let autres = observations.filter(observation => observation.id !== id);
  let erreurs = verifierObservation(copie,autres);
  if (erreurs.length > 0){
    return erreurs;
  }
  trouve[champ]=valeur;
  return[];
  }

// Renvoie une COPIE triée par pH décroissant. Le tableau reçu ne doit pas changer d'ordre.
export function trierParPhDecroissant(observations) {
 return [... observations].sort((a,b) => b.pH - a.pH);}

// Renvoie { texture, nombre } pour la texture la plus fréquente, ou null si la liste est vide.
// En cas d'égalité, la première texture rencontrée l'emporte.
// Exemple : { texture: 'limoneux', nombre: 4 }
export function textureLaPlusFrequente(observations) {
  if (observations.length === 0)
    return null;
  const compt = new Map();
  for ( const observation of observations){
    compt.set(observation.texture,(compt.get(observation.texture) || 0)+1);
  }
  let meilleur = null;
  for (const [texture,nombre] of compt){
    if (meilleur === null || nombre > meilleur.nombre){
      meilleur = {texture,nombre};
    }
  }
  return meilleur;
  }