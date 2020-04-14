const getData = api => (
  fetch(api)
    .then(data => (data.json()))
    .catch(error => console.log(error))
);

export default getData;
