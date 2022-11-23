//**TODO >>> === === API REST === === Exercise === === <<< */
//fetch('https://rawg-video-games-database.p.rapidapi.com/games', options);
//const API_KEY = 'https://rawg-video-games-database.p.rapidapi.com/games';
//const API_PO = `https://pokeapi.co/api/v2/pokemon/ditto`;
const img = document.getElementById(`idImg`);
const img2 = document.getElementById(`idImg2`);
const imgGrid = document.getElementById(`idGridImg`);
const imgGrid2 = document.getElementById(`idGridImg2`);
const imgGrid3 = document.getElementById(`idGridImg3`);
const imgGrid4 = document.getElementById(`idGridImg4`);
const imgGrid5 = document.getElementById(`idGridImg5`);
const imgGrid6 = document.getElementById(`idGridImg6`);
const sectionAdd = document.querySelector(`#idCharacter`);
//**// === >>> Buttons <<<< === */
let pagination = 1;
const btnBefore = document.getElementById(`btnBefore`);
const btnAfter = document.getElementById(`btnAfter`);

let imgAccess = [];
//*+ === >>> === === API REST === === <<< === */
const API_Rick = `https://rickandmortyapi.com/api/character/10`;
const API_EXTRA = `https://rickandmortyapi.com/api/character/?page=1&limit=5`;
const API = `https://rickandmortyapi.com/api/character/?page=3&limit=15`;
//const API = `https://rickandmortyapi.com/api/character`;

//*? ==> === === >= Buttons <= === === <== */
const beforeMove = () => {
  console.log('Before');
  if (pagination > 1) {
    pagination -= 1;
    apiNew(API);
  }
};

btnBefore.addEventListener('click', beforeMove);

const afterMove = () => {
  console.log('After');
  if (pagination < 1000) {
    pagination += 1;
    apiNew(API);
  }
};

btnAfter.addEventListener(`click`, afterMove);

//*? === API 01 === */
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

//*? === API 02 */
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

//*? === === API 03 === === */
const apiGridPlus = async (api) => {
  try {
    const res = await fetch(api, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const access = await res.json();
    console.log(access);
    console.log(access.results[0].name);

    imgAccess.push(access);

    const accessImg = () => {
      imgAccess.map((character) => {
        imgGrid.src = character.results[0].image;
        imgGrid2.src = character.results[1].image;
        imgGrid3.src = character.results[2].image;
        imgGrid4.src = character.results[3].image;
        imgGrid5.src = character.results[4].image;
        imgGrid6.src = character.results[5].image;
      });
    };

    if (res.status === 200) {
      accessImg();
    }

    if (res.status !== 200) {
      console.log('All ERROR!');
    }
  } catch (err) {
    console.log(`New Error!!`, err);
  }
};

//*? <<<<< === === API 04 === === >>>>> */
const apiNew = async (api) => {
  try {
    const response = await fetch(api);

    if (response.status === 200) {
      const data = await response.json();
      //console.log(data.results);

      let addCharacters = ``;

      data.results.forEach((character) => {
        addCharacters += `
       <div class="add-character">
						<img class="poster" src="${character.image}">
						<h3 class="title">${character.name}</h3>
			</div>
       `;
      });

      sectionAdd.innerHTML = addCharacters;
    }
    if (response.status === 404) {
      console.log('New Status 404!! Error');
    }
  } catch (error) {
    console.log('NeW Error!! New Error!', error);
  }
};

//*! === === ==> Call API <== === === */
apiPlus();
apiGridPlus(API_EXTRA);
apiNew(API);
