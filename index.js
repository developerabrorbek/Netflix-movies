"use strict";

let cards = document.querySelector(".cards");
let template = document.querySelector(".template").content;
let elLinks = document.querySelector(".hero-links");
let elSelect = $(".form-select");
let elRating = $(".search-rating");
let elGlobalSearch = $(".name-search");
let elSearchName = $(".search-name");
let elFrom = $(".search-form");



movies.splice(90);




renderUi(movies)

// ---------------- Global search by name -------------------


elGlobalSearch.addEventListener("input", (evt)=>{
    let elValue = elGlobalSearch.value;


    let filteredArr = movies.filter((item)=>{
        return item.title.toLocaleLowerCase().includes(elValue);
    })

    renderUi1(filteredArr);
})

// ---------------- Global search by name end -------------------



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

// elSelect.addEventListener("change",(evt)=>{
//     let elValue = evt.target.value;
//     let filteredArr = movies.filter(item=>{
//         return item.categories.includes(elValue);
//     })

//     renderUi1(filteredArr)
// });

// --------------- Sorted by categories end------------------------





// ---------------- search by rating -------------------


// elRating.addEventListener("input", (evt)=>{
//     let elValue = evt.target.value;
    
//     let filteredArr = movies.filter((item)=>{
//         return item.imdbRating == elValue;
//     })

//     renderUi1(filteredArr)
// })


// ---------------- search by rating -------------------


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

filterBySearch(movies)