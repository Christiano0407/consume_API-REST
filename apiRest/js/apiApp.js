//*TODO <=  === === Concept === === === API REST === === === HTTP & CRUD === === === === >= */
const btn = document.querySelector(`#btnId`);
const btnOneSave = document.querySelector(`btnIdOneSave`);
const btnCat = document.querySelector(`#btnIdCat`);
const img = document.querySelector(`.img`);
const imgCats = document.querySelectorAll(`#idImgCat`);
const btnSave = document.querySelector(`idSave`);

//** === === === === >=  API REST Key <= === === === === >> */
//const URL_CAT = `https://api.thecatapi.com/v1/images/search?limit=4&api_key=live_4xmhCeb5UYoB97eAEB2G7OzdJNtCO22ssgTDfQnRAtZE1bil9rPaUGlL4GWO0IwL`;
const Api_Key = `live_4xmhCeb5UYoB97eAEB2G7OzdJNtCO22ssgTDfQnRAtZE1bil9rPaUGlL4GWO0IwL`;
const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search`;
const API = `https://api.thecatapi.com/v1/images/search?limit=4&api=key=${Api_Key}`;
const API_FAVORITE = `https://api.thecatapi.com/v1/favourites?sub_id?limit=2&api_key=${Api_Key}`;

//*? === === ==> Select Random Img <== === ===  */
const call = async (api) => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    const img = document.querySelector(`.img`);
    img.src = data[0].url;
  } catch (err) {
    console.log('Have Error');
  }
};

const addCat = () => {
  call(API_URL_RANDOM);
};

btn.addEventListener('click', addCat);

//** Reload */
//addCat();
//*? === === ==> GRID Select Img <== === ===  */
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

//*? === === ==> Save Img <== === === */

//*? === === ==> Out Img <== === === */
