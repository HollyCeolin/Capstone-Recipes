//add event listeners go here
const baseURL = `http://localhost:5000/api/recipe`

const recipeCallback = ({ data: recipe }) => displayRecipe(recipe)
const errCallback = err => console.log(err.response.data)

const getAllRecipes = () => axios.get(baseURL).then(recipeCallback).catch(errCallback)
const createRecipe = body => axios.post(baseURL, body).then(recipeCallback).catch(errCallback)
const deleteRecipe = id => axios.delete(`${baseURL}/${id}`).then(recipeCallback).catch(errCallback)
//const updateRecipe = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(recipeCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let imageURL = document.querySelector('#img')


}
getAllRecipes()