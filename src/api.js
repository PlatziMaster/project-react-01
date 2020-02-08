const BASE_URL = 'http://localhost:3001';

async function callApi(endpoint, options = {}) {
  /*eslint no-param-reassign: ["error", { "props": false }]*/
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  data: {
    list() {
      return callApi('/data');
    },
  },
};

export default api;
