import { getSingleCharacter } from './characterData';
import { getSingleSpell, getSpells } from './spellData';
import { getSingleClass } from './classData';

const getCharacterSpells = (characterFirebaseKey) => new Promise((resolve, reject) => {
  getSingleCharacter(characterFirebaseKey)
    .then((characterObj) => {
      getSingleClass(characterObj.character_class)
        .then((classObj) => {
          if (characterObj.favorite) {
            const getFavSpellsPromise = characterObj.favorite.map((spell) => getSingleSpell(spell));

            Promise.all(getFavSpellsPromise).then((data) => {
              const spellArry = Object.values(data);
              resolve({ characterObj, classObj, spellArry });
            });
          } else {
            resolve({ characterObj, classObj });
          }
        })
        .catch((error) => reject(error));
    })
    .catch((error) => reject(error));
});

const getCharacterClassSpells = (characterFirebaseKey) => new Promise((resolve, reject) => {
  getSingleCharacter(characterFirebaseKey)
    .then((characterObj) => {
      getSingleClass(characterObj.character_class)
        .then((classObj) => {
          getSpells().then((data) => {
            const spellArry = Object.values(data);
            resolve({ characterObj, classObj, spellArry });
          });
        });
    }).catch((error) => reject(error));
});

export { getCharacterSpells, getCharacterClassSpells };
