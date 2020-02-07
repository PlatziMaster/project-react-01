const getData = (url) => {
  const data = fetch(url)
    .then(response => response.json())
    .then(json => json)
    .catch(e => e);

  return data;
};

export default getData;

