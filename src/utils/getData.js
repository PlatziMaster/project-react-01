function getData(API) {
  return new Promise((resolve, reject) => {
    try {
      resolve(fetch(API));
    } catch (error) {
      reject(error);
    }
  });
}

export default getData;
