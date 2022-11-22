//**TODO >>> === === API REST === === Exercise === === <<< */
//fetch('https://rawg-video-games-database.p.rapidapi.com/games', options);
//const API_KEY = 'https://rawg-video-games-database.p.rapidapi.com/games';
//const API_PO = `https://pokeapi.co/api/v2/pokemon/ditto`;
const API_Rick = `https://rickandmortyapi.com/api/character/2`;
const API = `https://rickandmortyapi.com/api/character/?page=1&limit=10`;
const img = document.getElementById(`idImg`);
const img2 = document.getElementById(`idImg2`);
const imgGrid = document.getElementById(`idGridIm`);
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

    let allImg = [];
    const data = await response.json();
    console.log(data);
    console.log(data.id);
    console.log(data.name);
    console.log(data.url);

    allImg.push(data);
    //console.log(allImg);

    const imgAll = () => {
      allImg.forEach((images) => {
        img.src = images.image;
        img2.src = images.image;
      });
    };

    if (response.status === 200) {
      imgAll();
    }

    if (response.status !== 200) {
      console.log(`We have Error! ${response.status}`);
    }
  } catch (error) {
    console.log('We have an error!!', error);
  }
};

//** === === API 03 === === */
const apiGridPlus = async () => {};

//*! === === ==> Call API <== === === */
apiPlus();
apiGridPlus();
