import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const useGetData = (URL) => {
  const dataPromise = getData(URL);

  const [theData, setTheData] = useState(dataPromise);
  useEffect(() => {
    dataPromise.then(respond => setTheData(respond))
      .catch((error) => {
        setLocations([]);
        console.error(error);
      });
  }, []);

  return theData;
};

export default useGetData;
