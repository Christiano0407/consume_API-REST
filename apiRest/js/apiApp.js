//*TODO === === === API REST === === ==< */
const btn = document.querySelector(`#btnId`);
const btnCat = document.querySelector(`#btnIdCat`);

//** === API >> */
const API_URL = `https://api.thecatapi.com/v1/images/search`;
const URL_CAT = `https://api.thecatapi.com/v1/images/search?limit=2`;

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

const callCat = async (apiUrl) => {
  try {
    //let addCat = [];
    const res = await fetch(apiUrl);
    const dataCat = await res.json();
    //console.log(dataCat);
    const imgCats = document.querySelectorAll(`#idImgCat`);
    imgCats.forEach((catImg) => (catImg.src = dataCat[0].url));
    //addCat.push(imgCats);
  } catch (err) {
    console.log('We have New Error!!');
  }
};

const newCat = () => {
  callCat(URL_CAT);
};

btnCat.addEventListener('click', newCat);
