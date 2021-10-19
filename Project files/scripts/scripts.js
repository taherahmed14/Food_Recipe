
async function fetchData(url){

    let res = await fetch(url);

    let data = await res.json();

    return data;

}

function append(data, container){

    container.innerHTML = null;

    data.forEach(function(el){

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.strMealThumb;

        let title = document.createElement("h3");
        title.innerText = el.strMeal;

        let cuisine = document.createElement("p");
        cuisine.innerText = "Cuisine: " + el.strArea;

        let recipe = document.createElement("p");
        recipe.innerText = el.strInstructions;

        div.append(image, title, cuisine, recipe);
        container.append(div);

    });

}   

function appendLatest(data, container){

    container.innerHTML = null;

    data.forEach(function(el){

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.strCategoryThumb;

        let title = document.createElement("h3");
        title.innerText = el.strCategory;

        let recipe = document.createElement("p");
        recipe.innerText = el.strCategoryDescription;

        div.append(image, title, recipe);
        container.append(div);

    });

}   

export {fetchData, append, appendLatest};