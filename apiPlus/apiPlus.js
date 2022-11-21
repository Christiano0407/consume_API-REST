//**TODO >>> === === API REST === === Exercise === === <<< */
//fetch('https://rawg-video-games-database.p.rapidapi.com/games', options);
const API_KEY = 'https://rawg-video-games-database.p.rapidapi.com/games';
const API_PO = `https://pokeapi.co/api/v2/pokemon/ditto`;

/* const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '31431f65dcmsh9642cbacaebda1ap1b6804jsnb245da6a7333',
    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
  },
}; */

const apiGames = async (api) => {
  try {
    const response = await fetch(api);

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log('Error', err);
  }
};

//console.log(API_PO);
apiGames(API_PO);
/* 
fetch('https://rawg-video-games-database.p.rapidapi.com/games', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
 */
