const API_KEY = "YOUR API KEY HERE"
const recipeListEl = document.getElementById("recipe-list");

// input is recipes
function displayRecipes(recipes){
    // -creating an empty string to clear the browser
        recipeListEl.innerHTML = "";
        recipes.forEach((recipe) => {
            const recipeItemEl = document.createElement("li")
            recipeItemEl.classList.add("recipe-item");
            recipeImageEl = document.createElement("img");
            recipeImageEl.src = recipe.image;
            recipeImageEl.alt = "recipe image";

            recipeTitleEl = document.createElement("h2");
            recipeTitleEl.innerHTML = recipe.title;

            recipeIngredientsEl  = document.createElement("p")
            recipeIngredientsEl.innerHTML = `<strong> Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}`;

            recipeLinkEl = document.createElement("a");
            recipeLinkEl.href = recipe.sourceUrl;
            recipeLinkEl.innerText = "View Recipe";


            recipeItemEl.appendChild(recipeImageEl);
            recipeItemEl.appendChild(recipeLinkEl);
            recipeItemEl.appendChild(recipeTitleEl);
            recipeItemEl.appendChild(recipeIngredientsEl);
            recipeListEl.appendChild(recipeItemEl);
        });
}

async function getRecipes() {
    // get random recipes from the variable api
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

    const data = await response.json()

    return data.recipes

}


async function init(){
    const recipes = await getRecipes()
    // console.log(recipes);

    // function to display recipes
    displayRecipes(recipes)
}

init()