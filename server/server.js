const express = require('express')
const cors = require('cors')
const path = require('path')
const recipes = require('./db.json')
const app = express()


app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const {getHTML, getCSS, getJS, getRecipes, addNewRecipe, deleteRecipe, updateRecipe} = require('./controller')

app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJS)

app.get(`/api/recipe`, getRecipes)
app.delete(`/api/recipe/:id`, deleteRecipe)
app.post(`/api/recipe`, addNewRecipe)
app.put(`/api/recipe/:id`, updateRecipe)


const port = process.env.PORT || 5000

app.listen(port, console.log(`Server is running on ${port}`))