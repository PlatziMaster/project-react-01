const getData = (url) => {
    const data = fetch(url)
    .then(res => res.json())
    .then(res => res)
    .catch(e => e);

    return data;
}

export default getData;