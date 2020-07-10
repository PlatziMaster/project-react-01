const getData = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
};
export default getData;
