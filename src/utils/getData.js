async function getData(API) {
  try {
    const data = await fetch(API);
    const response = await data.json();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getData;
