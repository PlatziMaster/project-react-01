
function getData() {
  return (
    fetch('https://google.com')
      .then(res => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch(err => console.log(err))
  );
}

export default getData;
