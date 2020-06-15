const getData = (API_URL) => {
  return (
    fetch(API_URL)
      .then(response => response.json())
      .catch(error => new Error(`Error en GetData. ${error}`))
  );
};

export default getData;
