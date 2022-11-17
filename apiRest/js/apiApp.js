//*TODO === === === API REST === === ==< */
const btn = document.querySelector(`#btnId`);
const btnCat = document.querySelector(`#btnIdCat`);
const imgCats = document.querySelector(`#idImgCat`);

//** === API >> */
const API_URL = `https://api.thecatapi.com/v1/images/search`;
//const URL_CAT = `https://api.thecatapi.com/v1/images/search?limit=3`;

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
//console.log(call(URL));
const addCat = () => {
  call(API_URL);
};

btn.addEventListener('click', addCat);
//*! Reload */
//addCat();

/* const callCat = async (apiUrl) => {
  try {
    const res = await fetch(apiUrl);
    const dataCat = await res.json();
    imgCats.forEach((item) => item.src == dataCat[0].url);
  } catch (err) {
    console.log('We have New Error!!');
  }
};

const newCat = () => {
  callCat(URL_CAT);
};

btnCat.addEventListener('click', newCat); */
