const getData = (API) => {
  const data = fetch(API)
    .then(response => response.json())
    .then(json => json);
  return data;
};

export default getData;
