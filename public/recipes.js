const baseURL = `http://localhost:5000/api/recipe`

const recipeCallback = ({ data: recipe }) => displayRecipe(recipe)
const errCallback = err => console.log(err)
const deleteRecipe = event => {
    axios.delete(`${baseURL}/${event.target.id}`).then(recipeCallback).catch(errCallback)
}






let deleteARecipe = document.getElementById('delete')
deleteARecipe.addEventListener('click', deleteRecipe)

