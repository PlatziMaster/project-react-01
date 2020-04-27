const API = 'http:localhost:3000/data'
const getData = async (API) => {
  try {
    const data = await fetch(API)
    const info = await data.json()
    return info
  } catch(error) {
    console.error('Error fetching data', error)
  }
}

export default getData;
