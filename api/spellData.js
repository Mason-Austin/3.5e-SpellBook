import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getSpells = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/spells.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleSpell = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/spells/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getSpells, getSingleSpell };
