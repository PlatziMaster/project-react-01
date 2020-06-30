import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [data, setData] = useState({

    Profile: [],
    certificate: [],
    Academic: [],
    experience: [],
    skills: [],
    interest: [],
    languages: [],
    social: [],
    degree: {},
  });
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);
  return data;
};

export default useInitialState;
