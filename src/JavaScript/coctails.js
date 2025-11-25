const LINK_INGREDIENT_BY_NAME = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i="
const LINK_INGREDIENT_IMG = "https://www.thecocktaildb.com/images/ingredients/" //gin-small.png"

async function searchFromApi(link){

   let response = await fetch(link);
    let data = await response.json();
    console.log(data)
    
    return data; 
}

// Ingredients

const IMAGE_NOT_FOUND = "https://previews.123rf.com/images/asmati/asmati1701/asmati170100126/68986757-no-cocktail-sign-illustration.jpg";


const selectedIngredients = []; //list of selected ingredients
let currentIngredient = {};

async function getIngredientByName(ingredientName){

    let ingredientsFromApi = await searchFromApi(LINK_INGREDIENT_BY_NAME+ingredientName)

    return ingredientsFromApi

}


const input = document.getElementById("ingredientName");

input.addEventListener("input", async () => {
     
    const query = input.value.toLowerCase();

    if (query.length === 0) {
        list.style.display = "none";
        return;
    }


    const response = await getIngredientByName(query)

    if(response.ingredients){
        currentIngredient.name = response.ingredients[0].strIngredient
        currentIngredient.id = response.ingredients[0].idIngredient
    }
    
});

input.addEventListener("keydown", (event) =>{
    if (event.key === "Enter") {
    event.preventDefault();
    addHTMLIngredient();
    input.value=""
  }

});

function addHTMLIngredient(){

console.log(selectedIngredients.find(item => item.id === currentIngredient.id))

    if(!selectedIngredients.find(item => item.id === currentIngredient.id)){

    const list = document.getElementById("ingredientList");

    const ingredientImg = document.createElement("img")
    ingredientImg.id = currentIngredient.id
    ingredientImg.src = LINK_INGREDIENT_IMG + currentIngredient.name + "-small.png" // !!!!!! formatting name

    ingredientImg.addEventListener("click", () =>{
        const idToRemove = ingredientImg.id;


          const index = selectedIngredients.findIndex(item => item.id === idToRemove);
            if (index !== -1) {
                selectedIngredients.splice(index, 1);
            }

            if (selectedIngredients.length === 0){
                   list.style.display = "none"
            }

          const domElement = document.getElementById(idToRemove);
            if (domElement) {
                domElement.remove(); 
            }
    })

    selectedIngredients.push(currentIngredient)
    
    console.log("selected list")
    console.log(selectedIngredients)


    list.appendChild(ingredientImg)
    list.style.flexdirection = "row"; 
    list.style.display = "flex"
    
    currentIngredient = {}
    }

}

function clearResults(){
    resultsContainer.innerHTML = "";
}

