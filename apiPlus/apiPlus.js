//**TODO >>> === === API REST === === Exercise === === <<< */
//fetch('https://rawg-video-games-database.p.rapidapi.com/games', options);
const API_KEY = 'https://rawg-video-games-database.p.rapidapi.com/games';
const API_PO = `https://pokeapi.co/api/v2/pokemon/ditto`;
const API_Rick = `https://rickandmortyapi.com/api/character/2`;
const img = document.getElementById(`#idImg`);

/* const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '31431f65dcmsh9642cbacaebda1ap1b6804jsnb245da6a7333',
    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
  },
}; */
/* 
fetch('https://rawg-video-games-database.p.rapidapi.com/games', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
 */

/* const apiGames = async (api) => {
  try {
    const response = await fetch(api);

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log('Error', err);
  }
};
apiGames(API_PO); */

//** === API 02 */
const apiPlus = async () => {
  try {
    //const obj = { apiName: 'Rick & Morty' };
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'image/jpeg');

    const response = await fetch(API_Rick, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify(img),
    });

    const data = await response.json();
    console.log(data.id);
    console.log(data.name);
    console.log(data.url);
    console.log(data.status);
    console.log(data.origin.name);
    console.log(data.location.name);
    console.log(data.image);
    console.log(data.created);

    if (response.status !== 200) {
      console.log(`We have Error! ${response.status}`);
    }
  } catch (error) {
    console.log('We have an error!!', error);
  }
};

apiPlus();
