const getData = (API_URL) => {
  return (
    // fetch(URL)
    fetch(API_URL)
      .then(respond => respond.json())
      .catch(error => rej(error))
      .catch(error => console.error(error))
  );
};

export default getData;
