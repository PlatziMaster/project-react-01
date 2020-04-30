import { useState, useEffect } from 'react';

const getData = (API) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return data;
};

export default getData;
