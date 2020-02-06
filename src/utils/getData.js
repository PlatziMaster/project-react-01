import { useState, useEffect } from 'react';

export const getData = (url) => {
  const data = fetch(url)
    .then(response => response.json())
    .then(json => json)
    .catch(e => e);

  return data;
};

export const getState = (_URL) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData(_URL)
      .then(initialState => setState(initialState));
  }, []);

  return state;
};

