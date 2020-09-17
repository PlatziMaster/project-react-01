// eslint-disable-next-line consistent-return
const getData = async (API_URL) => {

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getData;
