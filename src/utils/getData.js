const getData = (API) => {
  return (
    fetch(API)
      .then(response => response.json)
      .then(data => data)
      .catch(err => console.log(err))
  )
}

export default getData;