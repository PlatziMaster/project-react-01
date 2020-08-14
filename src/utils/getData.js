const getData = (url) => {
  const data = fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);

  return data;
};

export default getData;
