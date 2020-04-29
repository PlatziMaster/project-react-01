import { useState, useEffect } from 'react';

const useGetData = (url) => {
  const [state, setState] = useState([]);
  let initialState;
  useEffect(() => {
    const any = async () => {
      const data = await fetch(url);
      initialState = await data.json();
      setState(initialState);
    };
    any();
  }, []);
  return state;
};

export default useGetData;
