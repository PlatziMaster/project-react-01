import { useState, useEffect } from 'react';
import getData from '../utils/getData';

const useGetData = (url) => {
  const initialState = getData(url);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const test = await getData(url);
        setState(test);
      } catch (error) {
        alert(error);
      }
    };
    asyncFunc();
  }, []);
  return state;
};

export default useGetData;
