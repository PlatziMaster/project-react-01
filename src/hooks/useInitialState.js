import {
  useState,
  useEffect,
} from 'react';

const useInitialState = (API) => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setInfo(data))
      .catch((error) => {
        return error.message;
      });
  }, []);
  return info;
};

export default useInitialState;
