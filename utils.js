"use strict";

const renderUi1 = (arr) => {
  cards.innerHTML = "";
  arr.forEach((item) => {
    let copy = template.cloneNode(true);

    let elImg = copy.querySelector(".card-img");
    let elTitle = copy.querySelector(".card-body__title");
    let elYear = copy.querySelector(".year");
    let elRuntime = copy.querySelector(".runtime");
    let elLang = copy.querySelector(".lang");
    let elLink = copy.querySelector(".youtube-link");

    elImg.setAttribute("src", `${item.smallThumbnail}`);
    elTitle.textContent = `${item.title}`;
    elYear.textContent = `${item.year}`;
    elRuntime.textContent = `${time(item.runtime)}`;
    elLang.textContent = `${item.language}`;
    elLink.setAttribute("href", `https://youtube.com/embed/${item.youtubeId}`);

    cards.appendChild(copy);
  });
};

const renderUi = (arr, elNumber) => {
  cards.innerHTML = "";

  if (elNumber) {
    arr.forEach((item, index) => {
      if (index > elNumber - 10 && index < elNumber) {
        let copy = template.cloneNode(true);

        let elImg = copy.querySelector(".card-img");
        let elTitle = copy.querySelector(".card-body__title");
        let elYear = copy.querySelector(".year");
        let elRuntime = copy.querySelector(".runtime");
        let elLang = copy.querySelector(".lang");
        let elLink = copy.querySelector(".youtube-link");
        let elAboutBtn = copy.querySelector(".about-film");

        elImg.setAttribute("src", `${item.smallThumbnail}`);
        elTitle.textContent = `${item.title}`;
        elYear.textContent = `${item.year}`;
        elRuntime.textContent = `${time(item.runtime)}`;
        elLang.textContent = `${item.language}`;
        elLink.setAttribute(
          "href",
          `https://youtube.com/embed/${item.youtubeId}`
        );
        elAboutBtn.dataset.id = item.imdbId;

        cards.appendChild(copy);
      }
    });
  } else {
    arr.forEach((item) => {
      let copy = template.cloneNode(true);

      let elImg = copy.querySelector(".card-img");
      let elTitle = copy.querySelector(".card-body__title");
      let elYear = copy.querySelector(".year");
      let elRuntime = copy.querySelector(".runtime");
      let elLang = copy.querySelector(".lang");
      let elLink = copy.querySelector(".youtube-link");
      let elAboutBtn = copy.querySelector(".about-film");

      elImg.setAttribute("src", `${item.smallThumbnail}`);
      elTitle.textContent = `${item.title}`;
      elYear.textContent = `${item.year}`;
      elRuntime.textContent = `${time(item.runtime)}`;
      elLang.textContent = `${item.language}`;
      elLink.setAttribute(
        "href",
        `https://youtube.com/embed/${item.youtubeId}`
      );
      elAboutBtn.dataset.id = item.imdbId;

      cards.appendChild(copy);
    });
  }
};

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