//*TODO === === === API REST === === ==< */
const btn = document.querySelector(`#btnId`);
const btnCat = document.querySelector(`#btnIdCat`);
const imgCats = document.querySelectorAll(`#idImgCat`);

//** === API Key === >> */
//const API_URL = `https://api.thecatapi.com/v1/images/search`;
//const URL_CAT = `https://api.thecatapi.com/v1/images/search?limit=4&api_key=live_4xmhCeb5UYoB97eAEB2G7OzdJNtCO22ssgTDfQnRAtZE1bil9rPaUGlL4GWO0IwL`;
const Api_Key = `live_4xmhCeb5UYoB97eAEB2G7OzdJNtCO22ssgTDfQnRAtZE1bil9rPaUGlL4GWO0IwL`;
const API = `https://api.thecatapi.com/v1/images/search?limit=4&${Api_Key}`;

const call = async (api) => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    const img = document.querySelector(`.img`);
    img.src = data[0].url;
  } catch (err) {
    console.log('Have Error');
  }
};
const addCat = () => {
  call(API);
};

btn.addEventListener('click', addCat);
//*! Reload */
//addCat();

const callCat = async (apiUrl) => {
  try {
    const res = await fetch(apiUrl);
    const dataCat = await res.json();
    imgCats.forEach((catImg) => {
      catImg.src = dataCat[1].url;
    });
  } catch (err) {
    console.log('We have New Error!!');
  }
};

const newCat = () => {
  callCat(API);
};

btnCat.addEventListener('click', newCat);
