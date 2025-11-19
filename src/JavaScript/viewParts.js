const IMAGE_NOT_FOUND = "https://previews.123rf.com/images/asmati/asmati1701/asmati170100126/68986757-no-cocktail-sign-illustration.jpg"

async function addCoctailCardtoHTML(coctailInfo){

    const mainContainerDIV = document.createElement("div")
    mainContainerDIV.id = coctailInfo.idDrink;


    //see index.css
    mainContainerDIV.classList.add("main-coctail-container")

    
    const  nameCoctail = document.createElement("h2")
    nameCoctail.style.textAlign = 'center'
    nameCoctail.textContent = coctailInfo.strDrink

    mainContainerDIV.appendChild(nameCoctail)

    //add image
    const imageContainer = await addCoctailIngredientsHTML(coctailInfo);
    mainContainerDIV.appendChild(imageContainer)

    //add ingredients
    if(coctailInfo.hasOwnProperty("strIngredient1")){
    const receptContainer = await addReceptCoctailHTML(coctailInfo) //list

    
    mainContainerDIV.appendChild(receptContainer)

    
    }

    document.body.appendChild(mainContainerDIV)

    console.log(mainContainerDIV)

}

async function addCoctailIngredientsHTML(coctailInfo){
    const imageContainer = document.createElement("img")
    imageContainer.classList.add("cocktail-image")

    imageContainer.src = coctailInfo.strDrinkThumb || IMAGE_NOT_FOUND;

    return imageContainer;

}

async function addReceptCoctailHTML(coctailInfo){
    const receptContainer = document.createElement("ul")
    
    for (let i = 1; i <= 15; i++) {
                

        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;

        

        const ingredient = coctailInfo[ingredientKey];
        const measure = coctailInfo[measureKey];
    

            if (ingredient !== null ){

                const ingregientElement = document.createElement("li")
                if (measure !== null) {
                    ingregientElement.textContent = `${measure} `
                }
                ingregientElement.textContent += `${ingredient}`

                receptContainer.appendChild(ingregientElement)

            }
    
    }

    const receptElement = document.createElement("li") 
    receptElement.textContent = coctailInfo.strInstructions

    receptContainer.appendChild(receptElement)
        
 return receptContainer;
}

async function addIngredientCardToHTML(ingredientInfo) {
    const mainContainerDIV = document.createElement("div")
    mainContainerDIV.id = ingredientInfo.idIngredient;


    //see index.css
    mainContainerDIV.classList.add("main-coctail-container")

    
    const  nameIngredient = document.createElement("h2")
    nameIngredient.style.textAlign = 'center'
    nameIngredient.textContent = ingredientInfo.strIngredient

    const descriptionIngredient = document.createElement("p")
    descriptionIngredient.textContent = ingredientInfo.strDescription

    mainContainerDIV.appendChild(nameIngredient)
    mainContainerDIV.appendChild(descriptionIngredient)

    document.body.appendChild(mainContainerDIV)

}


async function addSelectionListOfIngredients(namesOfIngredients){

    const selectionOfIngredients = document.getElementById("lisOfIngredients")
    const firstOption = document.createElement("option")
    firstOption.value = "null"
    firstOption.textContent = "null"

    selectionOfIngredients.appendChild(firstOption)

    for (let i = 0; i < namesOfIngredients.length; i++){
        const optionIngredient = document.createElement("option")
        optionIngredient.value = namesOfIngredients[i].strIngredient1
        optionIngredient.textContent = namesOfIngredients[i].strIngredient1
        selectionOfIngredients.appendChild(optionIngredient)
    }
}

async function addSelectionListOfGlasses(listOfGlasses){

    const selectionOfGlasses = document.getElementById("lisOfGlasses")
    const firstOption = document.createElement("option")
    firstOption.value = "null"
    firstOption.textContent = "null"

    selectionOfGlasses.appendChild(firstOption)

    for (let i = 0; i < listOfGlasses.length; i++){
        const optionGlasses = document.createElement("option")
        optionGlasses.value = listOfGlasses[i].strGlass
        optionGlasses.textContent = listOfGlasses[i].strGlass
        selectionOfGlasses.appendChild(optionGlasses)
    }
}


