const getData = (API) => {
  return fetch(API)
    .then(data => data.json())
    .then(response => response)
    .catch(error => error);
};

export default getData;
