//add event listeners go here
const baseURL = `http://localhost:5000/api/recipe`



const recipeContainer = document.querySelector('#recipe-container')
const recipeCallback = ({ data: recipe }) => displayRecipe(recipe)
const errCallback = err => console.log(err)

const getAllRecipes = () => axios.get(baseURL).then(recipeCallback).catch(errCallback)


const createRecipe = body => axios.post(baseURL, body).then(recipeCallback).catch(errCallback)

// const deleteRecipe = id => axios.delete(`${baseURL}/${id}`).then(recipeCallback).catch(errCallback)

// const updateRecipe = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(recipeCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

let recipeName = document.querySelector('#recipe-name')
let ingredients = document.querySelector('input[name="ingredients"]')
let directions = document.querySelector('input[name="directions"]')
let mealType = document.querySelector('input [name="meal-type"]')


let recipeObj = {
    recipeName: recipeName.value,
    mealType: mealType.value,
    ingredients: ingredients.value,
    directions: directions.value 
}
    createRecipe(recipeObj)

    recipeName.value = ''
    mealType.value = ''
    ingredients.value = ''
    directions.value = ''
}












const displayRecipe = arr => {
    recipeContainer.innerHTML = ''
    let newRecipe = document.createElement('ul')
    arr.forEach(recipeObj => {
        let {id, recipeName, mealType, ingredients, directions} = recipeObj
        let recipeItem = document.createElement('li')
        let recipeNameText = document.createElement('span')
        let mealTypeText = document.createElement('span')
        let ingredientsText = document.createElement('span')
        let directionsText = document.createElement('span')
        let idText = document.createElement('span')

         recipeItem.id = id
        recipeItem.addEventListener('click', deleteRecipe)

        recipeNameText.textContent = recipeName
        recipeName.id = id
        
        mealTypeText.textContent =
        mealType
        mealType.id = id

        ingredientsText.textContent =
        ingredients
        ingredients.id = id

        directionsText.textContent = directions
        directions.id = id

        idText.textContent = `This recipe id is ${id}`
        idText.id = id

        recipeItem.appendChild(recipeNameText)
        recipeItem.appendChild(mealTypeText)
        recipeItem.appendChild(ingredientsText)
        recipeItem.appendChild(directionsText)

        newRecipe.appendChild(recipeItem)
        recipeContainer.appendChild(newRecipe)
    });

}
let allRecipes = document.querySelector('.all')
allRecipes.addEventListener('click', getAllRecipes)

let addRecipe = document.querySelector('.add')
addRecipe.addEventListener('click', createRecipe)