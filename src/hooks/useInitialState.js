import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch((error) => {
        return error.message;
      })
  }, []); 
  return profile;
};

export default useInitialState;
