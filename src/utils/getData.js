import dataJson from '../../data.json';

async function getData() {
  const response = await fetch('http://localhost:3000/data');
  const data = await response.json();
  console.log(data);
  return data;
}

export default getData;

