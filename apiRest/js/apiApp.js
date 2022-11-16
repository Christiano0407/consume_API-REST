//** === === API REST === === */
console.log('Consume API');

const URL = `https://api.thecatapi.com/v1/images/search`;

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

console.log(call(URL));
