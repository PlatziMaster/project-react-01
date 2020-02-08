const getData = (api) => {
//   return new Promise((res, rej) => {
//     fetch(api)
//       .then((response) => {
//         res(response.json());
//       })
//       .catch(error => rej(error));
//   });
  return fetch(api)
    .then(response => response.json)
    .catch(error => error);
};

export default getData;
