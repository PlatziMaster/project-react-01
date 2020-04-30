const getData = (API = 'https://google.com') => {
  return window.fetch(API).then(res => res.json());
};

export default getData;
