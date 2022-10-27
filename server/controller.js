const recipes = require('./db.json')
let newId = 8
const path = require('path')
const db = require('./db.json') 
module.exports ={
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html' ))
    },

    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, '../public'/styles.css))
    },

    getJS: (req, res) => {
        res.sendFile(path.join(__dirname, '../public/main.js'))
    },

    getRecipes:(req, res) => 
        res.status(200).send(recipes),
        
    deleteRecipe: (req, res) => {
            let index = recipes.findIndex(elem => elem.id === +req.params.id)
            recipes.splice(index, 1)
            res.status(200).send(recipes)
        },

    
    createRecipe: (req, res) => {
        let {recipeName, mealType, ingredients, directions} = req.body
        let newRecipe = {
            id:newId,
            recipeName,
            mealType,
            ingredients,
            directions
            
        }
        recipes.push(newRecipe)
        res.status(200).send(recipes)
        newId++
    },

    updateRecipe: (req, res) => {
        let {id, recipeName, mealType, ingredients, directions} = req.params
        let index = db.findIndex(obj.id ===+id)

        recipes.splice(index, 1)
        res.status(200).send(recipes)

    }
    
} 


   


    



