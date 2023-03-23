"use strict";

const renderUi = (arr) => {
  cards.innerHTML = "";
  arr.forEach((item) => {
    let copy = template.cloneNode(true);

    let elImg = copy.querySelector(".card-img");
    let elTitle = copy.querySelector(".card-body__title");
    let elYear = copy.querySelector(".year");
    let elRuntime = copy.querySelector(".runtime");
    let elLang = copy.querySelector(".lang");
    let elLink = copy.querySelector(".youtube-link");
    let elAboutBtn = copy.querySelector(".about-film");
    let elWatchLater = copy.querySelector(".watch-later");

    elImg.setAttribute("src", `${item.smallThumbnail}`);
    elTitle.textContent = `${item.title}`;
    elYear.textContent = `${item.year}`;
    elRuntime.textContent = `${time(item.runtime)}`;
    elLang.textContent = `${item.language}`;
    elLink.setAttribute("href", `https://youtube.com/embed/${item.youtubeId}`);
    elAboutBtn.dataset.id = item.imdbId;
    elWatchLater.dataset.id = item.imdbId;

    cards.appendChild(copy);
  });
};

const renderUiBasket = (arr) => {
  basketCards.innerHTML = "";
  arr.forEach((item) => {
    let copy = template.cloneNode(true);

    let elImg = copy.querySelector(".card-img");
    let elTitle = copy.querySelector(".card-body__title");
    let elYear = copy.querySelector(".year");
    let elRuntime = copy.querySelector(".runtime");
    let elLang = copy.querySelector(".lang");
    let elLink = copy.querySelector(".youtube-link");
    let elAboutBtn = copy.querySelector(".about-film");
    let elWatchLater = copy.querySelector(".watch-later");

    elImg.setAttribute("src", `${item.smallThumbnail}`);
    elTitle.textContent = `${item.title}`;
    elYear.textContent = `${item.year}`;
    elRuntime.textContent = `${time(item.runtime)}`;
    elLang.textContent = `${item.language}`;
    elLink.setAttribute("href", `https://youtube.com/embed/${item.youtubeId}`);
    elAboutBtn.dataset.id = item.imdbId;
    elWatchLater.dataset.id = item.imdbId;

    basketCards.appendChild(copy);
  });
};

//   cards.innerHTML = "";

//   if (elNumber) {
//     arr.forEach((item, index) => {
//       if (index > elNumber - 10 && index < elNumber) {
//         let copy = template.cloneNode(true);

//         let elImg = copy.querySelector(".card-img");
//         let elTitle = copy.querySelector(".card-body__title");
//         let elYear = copy.querySelector(".year");
//         let elRuntime = copy.querySelector(".runtime");
//         let elLang = copy.querySelector(".lang");
//         let elLink = copy.querySelector(".youtube-link");
//         let elAboutBtn = copy.querySelector(".about-film");

//         elImg.setAttribute("src", `${item.smallThumbnail}`);
//         elTitle.textContent = `${item.title}`;
//         elYear.textContent = `${item.year}`;
//         elRuntime.textContent = `${time(item.runtime)}`;
//         elLang.textContent = `${item.language}`;
//         elLink.setAttribute(
//           "href",
//           `https://youtube.com/embed/${item.youtubeId}`
//         );
//         elAboutBtn.dataset.id = item.imdbId;

//         cards.appendChild(copy);
//       }
//     });
//   } else {
//     arr.forEach((item) => {
//       let copy = template.cloneNode(true);

//       let elImg = copy.querySelector(".card-img");
//       let elTitle = copy.querySelector(".card-body__title");
//       let elYear = copy.querySelector(".year");
//       let elRuntime = copy.querySelector(".runtime");
//       let elLang = copy.querySelector(".lang");
//       let elLink = copy.querySelector(".youtube-link");
//       let elAboutBtn = copy.querySelector(".about-film");

//       elImg.setAttribute("src", `${item.smallThumbnail}`);
//       elTitle.textContent = `${item.title}`;
//       elYear.textContent = `${item.year}`;
//       elRuntime.textContent = `${time(item.runtime)}`;
//       elLang.textContent = `${item.language}`;
//       elLink.setAttribute(
//         "href",
//         `https://youtube.com/embed/${item.youtubeId}`
//       );
//       elAboutBtn.dataset.id = item.imdbId;

//       cards.appendChild(copy);
//     });
//   }
// };

const elCreator = (tagName, textContent) => {
  let newEl = document.createElement(tagName);

  if (textContent) {
    newEl.innerHTML = textContent;
  }

  return newEl;
};

function $(className) {
  let newEl = document.querySelector(className);
  return newEl;
}

function $$(className) {
  let newEl = document.querySelectorAll(className);
  return newEl;
}


function time(runtime){
  let a,b,time;
  if(runtime >= 60){
      a = Math.floor(runtime / 60);
      b = runtime % 60;
      time = `${a}soat ${b}min`;
  } else{
      b = runtime;
      time = `${b}min`;
  }

  return time;
}

function filterBySearch(arr){
  elFrom.addEventListener("submit", (evt)=>{
      evt.preventDefault();
      let elSelectValue = elSelect.value;
      let elRatingValue = elRating.value;
      let elSearchValue = elSearchName.value;
      console.log(elSelectValue, elRatingValue, elSearchValue);
  
      if(elSearchValue || elRatingValue || elSelectValue){
          let filteredByCategoryArr = arr.filter((item)=>{
              return item.categories.includes(elSelectValue);
          })
      
          let filteredByRating = filteredByCategoryArr.filter((item)=>{
              return item.imdbRating == elRatingValue;
          })
      
          let filteredByName = filteredByRating.filter((item)=>{
              return item.title.toLowerCase().includes(elSearchValue);
          })
      
          if(filteredByName.length){
              renderUi(filteredByName);
          } else{
              cards.innerHTML = `<h1 class="text-danger text-center fs-3">Nothing is found</h1>`
          }
      }
  })
}