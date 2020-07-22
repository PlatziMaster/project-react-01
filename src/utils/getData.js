const getData = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => HTMLFormControlsCollection.log(error));
};

export default getData;
