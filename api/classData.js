import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getClasses = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/classes.json`, {
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

export default getClasses;
