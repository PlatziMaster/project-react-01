import { useState, useEffect } from 'react';

const useData = (API) => {
  const [state, setState] = useState([
    {
      experience: [],
      Academic: [],
      skills: [],
      interest: [],
      languages: [],
      social: [],
    },
  ]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setState(data))
      .catch(error => console.error(error));
  }, []);
  return state;
};

export default useData;
