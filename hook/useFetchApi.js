import { useState, useEffect } from 'react';
import getData from '../src/utils/getData';

const useFetchData = (API) => {
    const [response, setResponse] = useState('');

    useEffect(() => {
        getData(API)
            .then(response => setResponse(response))
            .catch(error => setResponse(error));
    }, []);

    return response;

};

export default useFetchData;