const getData = (route) => {
  return fetch(route)
    .then(res => res.json());
};

export default getData;
