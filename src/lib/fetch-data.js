export const fetchFixtures = async () => {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c06af5713dmshbc887ec59531594p178efdjsn8bb02da86072',
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        }
    };

    const result = await fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
            return response;
        })
        .catch((err) => console.error(err));
    return result;
}