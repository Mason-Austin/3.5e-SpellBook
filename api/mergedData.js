import { getSingleCharacter } from './characterData';
import { getSingleSpell } from './spellData';

const getCharacterSpells = (characterFirebaseKey) => new Promise((resolve, reject) => {
  getSingleCharacter(characterFirebaseKey)
    .then((characterObj) => {
      if (characterObj.favorite) {
        const getFavSpellsPromise = characterObj.favorite.map((spell) => getSingleSpell(spell));

        Promise.all(getFavSpellsPromise).then((data) => {
          resolve(Object.values(data));
        });
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

export default getCharacterSpells;
