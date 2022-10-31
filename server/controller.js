const recipes = require('./db.json')
let newId = 8
const path = require('path')
 
module.exports ={
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html' ))
    },
    getHTML2: (req, res) => {
        res.sendFile(path.join(__dirname, '../public/add.html'))
    },
    getHTML3: (req, res) => {
        res.sendFile(path.join(__dirname, '../public/recipes.html'))
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
        console.log('hi')
            let index = recipes.findIndex(elem => elem.id === +req.params.id)
            console.log(req.params)
            recipes.splice(index, 1)
            res.status(200).send(recipes)

        },
   
    addNewRecipe: (req, res) => {
        let {recipeName, mealType, ingredients, directions} = req.body
        let newRecipe = {
            id: newId,
            recipeName: recipeName,
            mealType: mealType,
            ingredients: ingredients,
            directions: directions    
        }
        recipes.push(newRecipe)
        res.status(200).send(recipes)
        newId++
    },
}

    // updateRecipe: (req, res) => {
    //     let { id } = req.params
    //     let { recipeName, mealType, ingredients, directions} = req.body
       
    //     }
        
    //     let index = recipes.findIndex(elem => +elem.id === +id)
            
        // if(recipeName ===" ") {
        //     res.status(400).send('must enter a name')
        // }if (mealType === " ") {
        //     res.status(400).send('must enter meal type')
        // }if (ingredients === " ") {
        //     res.status(400).send('must enter at least 1 ingredient')
        // }if(directions === " "){
        //     res.status(400).send('must enter directions')
        // }else{
        //     res.status(200).send(recipes)
        // }


        
//         recipes.splice(index, 1)
//         res.status(200).send(edit)
//     }
    
// } 



   


    



