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

export default getCharacters;
