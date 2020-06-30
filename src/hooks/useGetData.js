import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const initialState = require('../mocks/data.json');

const useGetData = (URL) => {
  const dataPromise = getData(URL);

  const [theData, setTheData] = useState(initialState.data);

  useEffect(() => {
    dataPromise.then((response) => {
      if (response.name === 'Error') {
        console.error(response);
        throw response.name;
      }
      setTheData(response);
    })
      .catch((error) => {
        console.error(`Error en useGetData: ${error}`);
      });
  }, []);

  return theData;
};

export default useGetData;
