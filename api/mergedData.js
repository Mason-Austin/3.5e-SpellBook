import { getSingleCharacter } from './characterData';
import { getSingleSpell } from './spellData';

const getCharacterSpells = (characterFirebaseKey) => new Promise((resolve, reject) => {
  getSingleCharacter(characterFirebaseKey)
    .then((characterObj) => {
      const getFavSpellsPromise = characterObj.favorite.map((spell) => getSingleSpell(spell));

      Promise.allSettled(getFavSpellsPromise).then(resolve);
    }).catch((error) => reject(error));
});

export default getCharacterSpells;
