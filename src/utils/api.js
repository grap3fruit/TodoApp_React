/* eslint-disable import/prefer-default-export */
import { BASE_URL } from './constants';

export const fetchData = async ({ url, method, data = {} }) => {
  // const results = await fetch(`${BASE_URL}${url}`).then((response) => response.json());
  const options = {
    method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
  };

  if (method !== 'GET') {
    options.body = JSON.stringify(data);
  }

  return await fetch(`${BASE_URL}${url}`, options).then((response) => response.json()); // parses JSON response into native JavaScript objects
};
