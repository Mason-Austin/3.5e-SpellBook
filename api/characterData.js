import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getCharacters = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/characters.json?orderBy="uid"&equalTo="${uid}"`, {
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

const createCharacter = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/characters.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleCharacter = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/characters/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getCharacters,
  createCharacter,
  getSingleCharacter,
};
