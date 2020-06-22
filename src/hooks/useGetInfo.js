import { useState, useEffect } from 'react';
import getData from '../utils/getData';

const useGetInfo = (API) => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const datos = await getData(API);
    setData(datos);
  }, []);

  // useEffect(() => {
  //   fetch(API)
  //     .then(response => response.json())
  //     .then(inf => setData(inf));
  // }, []);
  return data;
};

export default useGetInfo;
