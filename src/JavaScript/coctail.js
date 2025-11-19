const LINK_COCTAIL_BY_NAME = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const LINK_RANDOM_COCTAIL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
const LINK_INGREDIENT_BY_NAME = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i="
const LINK_ALCOHOLIC_COCTAILS = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
const LINK_NON_ALCOHOLIC_COCTAILS = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
const LINK_GET_LIST_GLASSES = "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
const LINK_GET_LIST_INGREDIENTS = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"

async function searchFromApi(link){

   let response = await fetch(link);
    let data = await response.json();
    console.log(data)
    
    return data; 
}

async function getCoctailByName(){

    const inputCocktailByName = document.getElementById("coctailName").value

    let listCoctailsByNames = await searchFromApi(LINK_COCTAIL_BY_NAME+inputCocktailByName)

    if (listCoctailsByNames.drinks !== null){

        for(let i = 0; i < listCoctailsByNames.drinks.length; i++){

            addCoctailCardtoHTML(listCoctailsByNames.drinks[i]);

        }

            } else {
        alert("No coctail finden")
    }

}

 async function getRandomCoctail(){
 
    let data = await searchFromApi(LINK_RANDOM_COCTAIL)

   if (data.drinks !== null){
    
    for(let i = 0; i < data.drinks.length; i++){

            addCoctailCardtoHTML(data.drinks[i]);

        }

        } else {
        alert("No random coctail finden")
    }

 }

 async function getIngredient(){

    const inputIngredientByName = document.getElementById("ingredientName").value

    let nonAlcoholoicsCoctails = await searchFromApi(LINK_INGREDIENT_BY_NAME+inputIngredientByName)

    if (nonAlcoholoicsCoctails.ingredients !== null){

        for(let i = 0; i < nonAlcoholoicsCoctails.ingredients.length; i++){

            addIngredientCardToHTML(nonAlcoholoicsCoctails.ingredients[i]);

        }

        } else {
        alert("No ingredient finden") 
    }
}

async function getAlcoholic(){

    let alcoholicsCoctails = await searchFromApi(LINK_ALCOHOLIC_COCTAILS)

   if (alcoholicsCoctails.drinks !== null){

        for(let i = 0; i < alcoholicsCoctails.drinks.length; i++){

            addCoctailCardtoHTML(alcoholicsCoctails.drinks[i]);

        }
        } else {
        alert("No alcoholic coctail finden")
    }

}

async function getNonAlcoholic(){

    let data = await searchFromApi(LINK_NON_ALCOHOLIC_COCTAILS)

   if (data.drinks !== null){
   for(let i = 0; i < data.drinks.length; i++){
            addCoctailCardtoHTML(data.drinks[i]);
        }
    }else {
        alert("No alcoholic coctail finden")
    }
}

async function getGlassesList(){

    let glassesList = await searchFromApi(LINK_GET_LIST_GLASSES)

    addSelectionListOfGlasses(glassesList.drinks)
}

async function getIngredientsList(){
    
    let ingredientsList = await searchFromApi(LINK_GET_LIST_INGREDIENTS)

    addSelectionListOfIngredients(ingredientsList.drinks)
}

getGlassesList()
getIngredientsList()
