"use strict";

let cards = $(".cards");
let elBasketWrapper = $(".basket-wrapper");
let elBasket = $(".basket");
let basketCards = $(".basket-cards");
let template = document.querySelector(".template").content;
let basketTemplate = document.querySelector(".basket-template").content;
let elLinks = $(".hero-links");
let elSelect = $(".form-select");
let elRating = $(".search-rating");
let elGlobalSearch = $(".name-search");
let elSearchName = $(".search-name");
let elFrom = $(".search-form");
let elModal = $(".modal");
let basketCloser = $(".basket-closer");

let basketArr;

movies.splice(90);

renderUi(movies);

// ---------------- Global search by name -------------------

elGlobalSearch.addEventListener("input", (evt) => {
  let elValue = elGlobalSearch.value;

  let filteredArr = movies.filter((item) => {
    return item.title.toLocaleLowerCase().includes(elValue);
  });

  renderUi(filteredArr);
});

// ---------------- Global search by name end -------------------

// ----------------- pagination added -------------------

let numbers = Math.ceil(movies.length / 8);
for (let i = 0; i < numbers; i++) {
  let newLi = elCreator("li", `${i + 1}`);
  newLi.setAttribute("class", "hero-link py-2 px-3 rounded-2 shadow");
  elLinks.appendChild(newLi);
}

let numberLink = $$(".hero-link");

numberLink.forEach((item) => {
  item.addEventListener("click", (evt) => {
    let elValue = +evt.srcElement.innerHTML;
    let slicedArray = movies.slice(elValue * 8 - 8, elValue * 8);
    renderUi(slicedArray);
  });
});

// ----------------- pagination added end-------------------

// --------------- Sorted by categories ------------------------

let categoriesArr = [];

movies.filter((item) => {
  let arr = item.categories;

  arr.forEach((item) => {
    if (!categoriesArr.includes(item)) {
      categoriesArr.push(item);
    }
  });
});

categoriesArr.forEach((item) => {
  let newLi = elCreator("option", `${item}`);
  elSelect.appendChild(newLi);
});

// --------------- Sorted by categories end------------------------

// ----------------- Film search added ---------------------
filterBySearch(movies);

// ----------------- Film search added end ---------------------

// ------------------ modal added ----------------------------
cards.addEventListener("click", (evt) => {
  let id;
  if (evt.target.className.includes("about-film")) {
    id = evt.target.getAttribute("data-id");

    movies.forEach((item) => {
      if (item.imdbId == id) {
        elModal.innerHTML = `<div class="modal-card">
        <img src="./images/close-icon.png" alt="close image" class="modal-close" width="34">
        <img src="${
          item.bigThumbnail
        }" alt="image" width="450" height="300" class="modal-image">
        <div class="modal-card__body">
            <div class="modal-extra">
                <div class="ratings">
                <p class="film-rating">Rating:${item.imdbRating}</p>
                    <img src="./images/star.jpg" alt="star" width="22" height="22">
                    
                </div>
                <div class="category">
                    <h3 class="category-title">Categories:</h3>
                    <p class="categories">
                        ${item.categories.flat()}
                    </p>
                </div>
            </div>
            <div class="modal-summary">
                <p class="summary">${item.summary}</p>
            </div>
        </div>
    </div>`;
      }
    });

    elModal.classList.remove("d-none");
    elModal.classList.add("d-flex");
  }
});

elModal.addEventListener("click", (evt) => {
  if (evt.target.className.includes("modal-close")) {
    elModal.classList.remove("d-flex");
    elModal.classList.add("d-none");
  }
});

// ------------- basket added -----------------
addWatchLater(movies);

elBasketWrapper.addEventListener("mousedown", (evt) => {
  elBasket.classList.remove("d-none");
  elBasket.classList.add("d-flex");
});

basketCloser.addEventListener("click", (evt) => {
  elBasket.classList.remove("d-flex");
  elBasket.classList.add("d-none");
});

basketCards.addEventListener("click", (evt) => {
  basketArr.forEach((item) => {
    if (evt.target.getAttribute("data-id") == item.imdbId) {
      let indexItem = basketArr.indexOf(item);
      basketArr.splice(indexItem, 1);
    }
  });

  renderUiBasket(basketArr);
});
