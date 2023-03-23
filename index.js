"use strict";

let cards = document.querySelector(".cards");
let elBasketWrapper = document.querySelector(".basket-wrapper");
let basketCards = document.querySelector(".basket-cards");
let template = document.querySelector(".template").content;
let elLinks = document.querySelector(".hero-links");
let elSelect = $(".form-select");
let elRating = $(".search-rating");
let elGlobalSearch = $(".name-search");
let elSearchName = $(".search-name");
let elFrom = $(".search-form");
let elModal = $(".modal");


movies.splice(90);




renderUi(movies)

// ---------------- Global search by name -------------------


elGlobalSearch.addEventListener("input", (evt)=>{
    let elValue = elGlobalSearch.value;


    let filteredArr = movies.filter((item)=>{
        return item.title.toLocaleLowerCase().includes(elValue);
    })

    renderUi(filteredArr);
})

// ---------------- Global search by name end -------------------



// ----------------- pagination added -------------------

let numbers = Math.ceil(movies.length / 8);
for(let i=0; i<numbers; i++){
    let newLi = elCreator("li", `${i+1}`);
    newLi.setAttribute("class", "hero-link py-2 px-3 rounded-2 shadow");
    elLinks.appendChild(newLi);
}

let numberLink = $$(".hero-link");

numberLink.forEach(item=>{
    item.addEventListener("click", (evt)=>{
        let elValue = +evt.srcElement.innerHTML;
        let slicedArray = movies.slice((elValue*8-8),elValue*8)
        renderUi(slicedArray);
    })
});

// ----------------- pagination added end-------------------



// --------------- Sorted by categories ------------------------

let categoriesArr = [];

movies.filter(item => {
    let arr = item.categories;

    arr.forEach(item=>{
        if(!categoriesArr.includes(item)){
            categoriesArr.push(item);
        };
    })
});

categoriesArr.forEach(item=>{
    let newLi = elCreator("option", `${item}`);
    elSelect.appendChild(newLi);
});

// --------------- Sorted by categories end------------------------


// ----------------- Film search added ---------------------
filterBySearch(movies)

// ----------------- Film search added end ---------------------





cards.addEventListener("click", (evt)=>{
    let id;
    if(evt.target.className.includes("about-film")){
        id = evt.target.getAttribute("data-id");

        movies.forEach((item)=>{
            if(item.imdbId == id){
                elModal.innerHTML = `<wrapper class="d-flex justify-content-between w-50">
                <div>
                <h2>${item.title}</h2>
                <video src="/embed/${item.youtubeId}" controls></video>
                </div>
                <p class="w-50 text-center">${item.summary}</p>
                </wrapper>`;
            }
        })

        elModal.classList.remove("d-none")
        elModal.classList.add("d-flex")

    }
    console.log(elModal);
})

elModal.addEventListener("dblclick", (evt)=>{
    elModal.classList.remove("d-flex");
    elModal.classList.add("d-none");
})





elBasketWrapper.addEventListener("mousedown", (evt)=>{
    basketCards.classList.remove("d-none");
    basketCards.classList.add("d-flex")
})



// ----------------- basket added ---------------------
let filteredArr = [];
cards.addEventListener("click", (evt)=>{
    let id;
    
    if(evt.target.className.includes("watch-later")){
        id = evt.target.getAttribute("data-id");

        movies.forEach((item)=>{
            if(item.imdbId == id){
                if(!filteredArr.includes(item)){
                    filteredArr.push(item);
                }
            }
        })
    }
    renderUiBasket(filteredArr)
})





