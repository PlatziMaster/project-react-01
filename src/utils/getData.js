function getData(API) {
  return fetch(API).then(response => response.json());
}

export default getData;
