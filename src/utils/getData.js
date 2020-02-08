const getData = (api) => {
  return fetch(api)
    .then(response => response.json)
    .catch(error => error);
};

export default getData;
