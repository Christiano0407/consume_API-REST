//*TODO === === === API REST === === ==< */
const btn = document.querySelector(`#btnId`);

//** === API >> */
const API_URL = `https://api.thecatapi.com/v1/images/search`;

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
