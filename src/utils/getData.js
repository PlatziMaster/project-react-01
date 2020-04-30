import { useState, useEffect } from 'react';

const useGetData = (url) => {
  const [state, setState] = useState([]);
  let initialState;
  useEffect(() => {
    const any = async () => {
      try {
        console.log(url);
        const data = await fetch(url);
        initialState = await data.json();
      } catch (err) {
        alert(err);
      }
      setState(initialState);
    };
    any();
  }, []);
  return state;
};

export default useGetData;
