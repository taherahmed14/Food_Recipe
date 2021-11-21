
async function fetchData(url){
    let res = await fetch(url);
    let data = await res.json();
    return data;
}

function append(data, container){

    container.innerHTML = null;

    data.forEach(({strMealThumb, strMeal, strArea, strInstructions}) => {

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = strMealThumb;

        let title = document.createElement("h3");
        title.innerText = strMeal;

        let cuisine = document.createElement("p");
        cuisine.innerText = "Cuisine: " + strArea;

        let recipe = document.createElement("p");
        recipe.innerText = strInstructions;

        div.append(image, title, cuisine, recipe);
        container.append(div);

    });

}   

function appendLatest(data, container){

    container.innerHTML = null;

    data.forEach(({strCategoryThumb, strCategory, strCategoryDescription}) => {

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = strCategoryThumb;

        let title = document.createElement("h3");
        title.innerText = strCategory;

        let recipe = document.createElement("p");
        recipe.innerText = strCategoryDescription;

        div.append(image, title, recipe);
        container.append(div);

    });

}   

export {fetchData, append, appendLatest};

function show(searchInput, dd){

    let inputValue = document.getElementById(searchInput).value; 

    fetch(`http://themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res);
        let dropDown = document.getElementById(dd);
        showDropDown(res.meals, dropDown, "container"); 
    })
    .catch((err) => {
        console.log(err);
    })

}

function showDropDown(data, d, c){

    d.setAttribute("class", "dropdown");
    d.innerHTML = null;

    data.forEach((el) => {
        
        let div = document.createElement("div");
        div.setAttribute("class", "recipeDiv");

        let recipeName = document.createElement("div");
        recipeName.innerText = el.strMeal;
        recipeName.setAttribute("class", "recipeName");

        div.onclick = function(){
            console.log(el);
            let container = document.getElementById(c);
            appendSearch(el, d, container);
        };

        div.append(recipeName);
        d.append(div);

    });

}

let timerId;
function debounce(func, delay){
    
    if(timerId){
        clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
        func("searchInput", "dropdown");
    }, delay);

}

function appendSearch({strMealThumb, strMeal, strArea, strInstructions}, d, container){

    container.innerHTML = null;
    d.removeAttribute("class", "dropdown");
    d.innerHTML = null;

    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = strMealThumb;

    let title = document.createElement("h3");
    title.innerText = strMeal;

    let cuisine = document.createElement("p");
    cuisine.innerText = "Cuisine: " + strArea;

    let recipe = document.createElement("p");
    recipe.innerText = strInstructions;

    div.append(image, title, cuisine, recipe);
    container.append(div);

}   

export {show, showDropDown, debounce, appendSearch};