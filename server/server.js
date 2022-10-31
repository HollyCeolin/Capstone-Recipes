const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()


app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const {getHTML,getHTML3, getCSS, getJS, getRecipes, addNewRecipe, deleteRecipe, getHTML2} = require('./controller')

app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJS)
app.get('/add', getHTML2)
app.get('/recipes', getHTML3)


app.get(`/api/recipe`, getRecipes)
app.delete(`/api/recipe/:id`, deleteRecipe)
app.post(`/api/recipe`, addNewRecipe)



const port = process.env.PORT || 5000

app.listen(port, console.log(`Server is running on ${port}`))