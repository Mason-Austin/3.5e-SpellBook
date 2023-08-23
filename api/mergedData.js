import { getSingleCharacter } from './characterData';
import { getSingleClass } from './classData';

const getCharacterSpells = (characterFirebaseKey) => new Promise((resolve, reject) => {
  getSingleCharacter(characterFirebaseKey)
    .then((characterObj) => {
      getSingleClass(characterObj.character_class)
        .then((classObj) => {
          resolve(classObj.spells);
        });
    }).catch((error) => reject(error));
});

export default getCharacterSpells;
