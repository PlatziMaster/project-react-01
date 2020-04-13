const getData = api => (
  fetch(api)
    .then(data => (data))
    .catch(error => console.log(error))
);

export default getData;
