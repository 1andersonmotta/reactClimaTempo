const key = 'f674ec32567d46acb75182157231109'

const fetchData = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;

    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json()

    return data;
}

export default fetchData;