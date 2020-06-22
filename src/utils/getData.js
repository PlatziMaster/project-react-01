const getData = (API) => {
  return fetch(API)
    .then(response => response.json())
    .catch(error => new Error(`${error}Error al obtener informacion`));
};

export default getData;
