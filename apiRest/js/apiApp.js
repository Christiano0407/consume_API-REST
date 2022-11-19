//*TODO <=  === === Concept === === === API REST === === === HTTP & CRUD === === === === >= */
const btn = document.querySelector(`#btnId`);
const btnOneSave = document.querySelector(`#btnIdOneSave`);
const btnCat = document.querySelector(`#btnIdCat`);
const img = document.querySelector(`.img`);
const imgCats = document.querySelectorAll(`#idImgCat`);
const btnSave = document.querySelector(`#idSave`);
const imgSave = document.querySelectorAll(`#imgArticleSave`);
const divImgAll = document.querySelector(`#idAllImg`);
const idErrorText = document.querySelector(`#idError`);
let saveImg = [];

//** === === === === >=  API REST Key <= === === === === >> */
//const URL_CAT = `https://api.thecatapi.com/v1/images/search?limit=4&api_key=live_4xmhCeb5UYoB97eAEB2G7OzdJNtCO22ssgTDfQnRAtZE1bil9rPaUGlL4GWO0IwL`;
const Api_Key = `live_4xmhCeb5UYoB97eAEB2G7OzdJNtCO22ssgTDfQnRAtZE1bil9rPaUGlL4GWO0IwL`;
const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search`;
const API = `https://api.thecatapi.com/v1/images/search?limit=4&api=key=${Api_Key}`;
const API_FAVORITE = `https://api.thecatapi.com/v1/favourites?limit=4&api_key=${Api_Key}`;
//const API_FAVORITE = `https://api.thecatapi.com/v1/favourites`;

//*? === === ==> Select Random Img <== === ===  */
const call = async (api) => {
  try {
    const response = await fetch(api);
    const data = await response.json();

    if (response.status === 200) {
      img.src = data[0].url;
    }

    if (response.status !== 200) {
      console.log('Error!!');
    }

    console.log(data);
  } catch (err) {
    console.log('Have Error');
  }
};

const addCat = () => {
  call(API_URL_RANDOM);
};
//*!=== === Save Img */
const saveImages = () => {
  saveImg.push(img);
  console.log(saveImg);
};

btn.addEventListener('click', addCat);
btnOneSave.addEventListener('click', saveImages);

//** Reload */
//addCat();
//*? === === ==> GRID Select Img <== === ===  */
const callCat = async (apiUrl) => {
  try {
    const res = await fetch(apiUrl);
    const dataCat = await res.json();

    if (res.status === 200) {
      imgCats.forEach((catImg) => {
        catImg.src = dataCat[1].url;
      });
      //console.log(res.status);
    }
  } catch (err) {
    console.log('We have New Error!!');
  }
};

const newCat = () => {
  callCat(API);
};

btnCat.addEventListener('click', newCat);

//*? === === ==> POST >= Save Img <== === === */
const loadFavorite = async () => {
  const res = await fetch(API_FAVORITE);
  const data = await res.json();
  console.log('Favorite');
  console.log(data);
};

const saveFavoriteCat = async () => {
  const resp = await fetch(API_FAVORITE, {
    method: `POST`,
    headers: {
      'Content-Type': 'application/json',
      /* 'x-api-key':
        'live_4xmhCeb5UYoB97eAEB2G7OzdJNtCO22ssgTDfQnRAtZE1bil9rPaUGlL4GWO0Iw', */
    },
    body: JSON.stringify({
      image_id: `bi0`,
    }),
  });

  console.log('resp');
  console.log(resp);
  const data = await resp.json();

  if (resp.status !== 200) {
    idErrorText.innerHTML = 'Error' + resp.status + data.message;
  }
};

const pushImage = () => {
  loadFavorite();
  saveFavoriteCat();
};

btnSave.addEventListener('click', pushImage);

//*? === === ==> Out Img <== === === */
