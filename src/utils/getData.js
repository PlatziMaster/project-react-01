const getData = async (API) => {
  try {
    const data = await fetch(API);
    const info = await data.json();
    return info;
  } catch (error) {
    console.error('Error fetching data', error);
  }
  return data;
};

export default getData;
