const getData = (api) => {
  return new Promise((res, rej) => {
    fetch(api)
      .then((response) => {
        res(response.json());
      })
      .catch(error => rej(error));
  });
};

export default getData;
