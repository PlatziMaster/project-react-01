const getData = (API) => {
  return window.fetch(API).then(res => res.json());
};

export default getData;
