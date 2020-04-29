const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// const getData = (url) => {
//   const data = fetch(url)
//     .then(response => response.json())
//     .then(json => json)
//     .catch(e => e);
//   return data;
// };

export default getData;
