//*TODO <=  === === Concept === === === API REST === === === HTTP & CRUD === === === === >= */
const btn = document.querySelector(`#btnId`);
const btnOneSave = document.querySelector(`#btnIdOneSave`);
const btnCat = document.querySelector(`#btnIdCat`);
const img = document.querySelector(`.img`);
const imgCats = document.querySelectorAll(`#idImgCat`);
const btnSave = document.querySelector(`#idSave`);
const imgSave = document.querySelector(`#imgArticleSave`);
/* const imgSave02 = document.querySelector(`#imgArticleSave02`);
const imgSave03 = document.querySelector(`#imgArticleSave03`);
const imgSave04 = document.querySelector(`#imgArticleSave04`);
const imgSave05 = document.querySelector(`#imgArticleSave05`); */
const divImgAll = document.querySelector(`#idAllImg`);
const idErrorText = document.querySelector(`#idError`);
let saveImg = [];
const sectionSave = document.querySelector(`#section-save`);
const btnDelete = document.querySelector(`#idOut`);
const idOutText = document.querySelector(`#idOutText`);
const idSaveSection = document.querySelector(`#idSave`);

//** === === === === >=  API REST Key <= === === === === >> */
//const URL_CAT = `https://api.thecatapi.com/v1/images/search?limit=4&api_key=live_4xmhCeb5UYoB97eAEB2G7OzdJNtCO22ssgTDfQnRAtZE1bil9rPaUGlL4GWO0IwL`;
const Api_Key = `live_4xmhCeb5UYoB97eAEB2G7OzdJNtCO22ssgTDfQnRAtZE1bil9rPaUGlL4GWO0IwL`;
const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search`;
const API = `https://api.thecatapi.com/v1/images/search?limit=4&api=key=${Api_Key}`;
const API_FAVORITE = `https://api.thecatapi.com/v1/favourites?limit=5&api_key=${Api_Key}`;
const API_FAVORITE_DELETE = (id) =>
  `https://api.thecatapi.com/v1/favourites/${id}?api_key=${Api_Key}`;

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
  /* saveImg.push(img);
  console.log(saveImg); */
};

btn.addEventListener('click', addCat);
btnOneSave.addEventListener('click', saveImages);

//** Reload */
addCat();
//*! === === ==> GRID Select Img <== === ===  */
/* const callCat = async (apiUrl) => {
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
}; */

/* const newCat = () => {
  callCat(API);
}; */

//btnCat.addEventListener('click', newCat);

//*? === === ==> POST >= Save Img <== === === */
const loadFavorite = async () => {
  try {
    const allRes = await fetch(API_URL_RANDOM);
    const data = await allRes.json();
    console.log('Favorite');

    if (allRes.status !== 200) {
      idErrorText.innerHTML = 'Error' + allRes.status + data.message;
    } else {
      //idSaveSection.innerHTML = '';
      data.map(() => {
        imgSave.src = data[0].url;
        saveFavoriteCat(data[0].id);
        /* saveImg.push(imgSave); */
        //imgSave.parentElement.setAttribute(`data`, `${data[0].id}`);
        //btn.onClick = () => deleteFavoriteCat(data.id);
      });
    }
    divImgAll.innerHTM = imgSave;
  } catch (error) {
    console.log('Error' + error);
  }
};

const saveFavoriteCat = async (id) => {
  const resp = await fetch(API_FAVORITE, {
    method: `POST`,
    headers: {
      'Content-Type': 'application/json',
      /* 'x-api-key':
        'live_4xmhCeb5UYoB97eAEB2G7OzdJNtCO22ssgTDfQnRAtZE1bil9rPaUGlL4GWO0Iw', */
    },
    body: JSON.stringify({
      image_id: id,
    }),
  });

  const data = await resp.json();

  if (resp.status !== 200) {
    idErrorText.innerHTML = 'Error' + resp.status + data.message;
  }
};

const pushImage = () => {
  loadFavorite();
};

btnSave.addEventListener('click', pushImage);

//*? === === ==> DELETE <==> Out Img <== === === */
const deleteFavoriteCat = async (id) => {
  const res = await fetch(API_FAVORITE_DELETE(id), {
    method: 'DELETE',
  });
  const data = await res.json();
  console.log(data);

  if (res.status !== 200) {
    idOutText.innerHTML =
      'Delete! You Have a New Error & Delete!' + res.status + data.message;
  } else {
  }
};
//*! === ADD Delete */
function deleteImg() {
  deleteFavoriteCat();
}

btnDelete.addEventListener('click', deleteImg());
