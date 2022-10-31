
const baseURL = `http://localhost:5000/api/recipe`



const recipeContainer = document.querySelector('.recipe-container')
const recipeCallback = ({ data: recipe }) => displayRecipe(recipe)
const errCallback = err => console.log(err)

let recipeName = document.querySelector('#recipe-to-add')
let ingredients = document.querySelector('#ingredients')
let directions = document.querySelector('#directions')
let mealType = document.querySelector('#type')

const getRecipes = () => axios.get(baseURL).then(recipeCallback).catch(errCallback)


 const addNewRecipe = body => axios.post(baseURL, body).then(recipeCallback).catch(errCallback)


// const updateRecipe = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(recipeCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()


let recipeObj = {
    recipeName: recipeName.value,
    mealType: mealType.value,
    ingredients: ingredients.value,
    directions: directions.value, 
    
}
    addNewRecipe(recipeObj)
    
}

function AddRecipe(recipe) {
    const newRecipe = document.createElement('div')
    newRecipe.classList.add('New-Recipe')

    newRecipe.innerHTML = `<p class ="recipe-title">${recipe.recipeName}</p>`
}

const displayRecipe = arr => {
    recipeContainer.innerHTML = ''
    let newRecipe = document.createElement('ul')
    arr.forEach(recipeObj => {
        let {id, recipeName, mealType, ingredients, directions,} = recipeObj
        let recipeItem = document.createElement('li')
        let recipeNameText = document.createElement('li')
        let mealTypeText = document.createElement('li')
        let ingredientsText = document.createElement('li')
        let directionsText = document.createElement('li')
        let idText = document.createElement('span')
        
        recipeNameText.setAttribute('id', 'title');
        mealTypeText.setAttribute('id', 'meal');
        ingredientsText.setAttribute('id', 'ing');
        directionsText.setAttribute('id', 'dir');

       

         recipeItem.id = id
         recipeItem.addEventListener('click', addNewRecipe)

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


let allRecipes = document.getElementById('all')
allRecipes.addEventListener('click', getRecipes)

let newRecipe = document.getElementById('submit')
newRecipe.addEventListener('click', submitHandler)
// let update = document.querySelector('.edit')
// update.addEventListener('click', updateRecipe)




 
