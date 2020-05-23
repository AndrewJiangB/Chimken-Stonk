const getData = async () => {
    const response = await fetch('https://finnhub.io/api/v1/quote?symbol=AAPL&token=br4b29nrh5r8ufeorhm0');
    console.log(response);
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson);
    console.log({name: 'APPL', price: myJson['c']});
    return {name: 'APPL', price: myJson['c']};
}

export default getData;