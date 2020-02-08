const getData = (API_URL) => {
  return (
    fetch(API_URL)
      .then(respond => respond.json())
      .catch(error => console.error(error))
  );
};

export default getData;
