const getData = (API_URL) => {
  return (
    fetch(API_URL)
      .then(respond => respond.json())
      .catch(error => new Error(`Error en GetData. ${error}`))
  );
};

export default getData;
