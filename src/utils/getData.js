const getData = url => fetch(url)
  .then(res => res.json())
  .then(res => res)
  .catch(err => console.error(err));

export default getData;
