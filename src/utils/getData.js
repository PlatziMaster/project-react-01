const getData = (URL) => {
  return (
    fetch(URL)
      .then(respond => respond.json())
      .catch(error => rej(error))
  );
};

export default getData;
