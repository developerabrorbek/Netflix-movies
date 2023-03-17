"use strict";

let cards = document.querySelector(".cards");
let template = document.querySelector(".template").content;
let elLinks = document.querySelector(".hero-links");
let elSelect = $(".form-select");
let elRating = $(".search-rating");
let elSearchByName = $(".search-name");


movies.splice(90);




renderUi(movies)



// ----------------- pagination added -------------------

let numbers = Math.ceil(movies.length / 9);
for(let i=0; i<numbers; i++){
    let newLi = elCreator("li", `${i+1}`);
    newLi.setAttribute("class", "hero-link py-2 px-3 rounded-2 shadow");
    elLinks.appendChild(newLi);
}

let numberLink = $$(".hero-link");

numberLink.forEach(item=>{
    item.addEventListener("click", (evt)=>{
        let elValue = +evt.srcElement.innerHTML;
        renderUi(movies, elValue*9);
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

elSelect.addEventListener("change",(evt)=>{
    let elValue = evt.target.value;
    let filteredArr = movies.filter(item=>{
        return item.categories.includes(elValue);
    })

    renderUi1(filteredArr)
});

// --------------- Sorted by categories end------------------------



// ---------------- search by name -------------------


console.log(elSearchByName);

elSearchByName.addEventListener("input", (evt)=>{
    let elValue = elSearchByName.value;


    let filteredArr = movies.filter((item)=>{
        return item.title.toLocaleLowerCase().includes(elValue);
    })

    renderUi1(filteredArr);
})

// ---------------- search by name end -------------------

// ---------------- search by rating -------------------


elRating.addEventListener("input", (evt)=>{
    let elValue = evt.target.value;
    
    let filteredArr = movies.filter((item)=>{
        return item.imdbRating == elValue;
    })

    renderUi1(filteredArr)
})


// ---------------- search by rating -------------------
