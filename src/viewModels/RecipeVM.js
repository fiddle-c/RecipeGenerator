
import { doc, getDocs, collection, query, limit } from "firebase/firestore";

import '../App'
import { db } from '../firebase/FirebaseConfig'
export class RecipeVM {
    
    constructor(props) {

    }

    async getRecipes() {
        try {
        let recipes = [

        ]            
        const q = query(collection(db, "test"), limit(1))
        const recipeDoc = await getDocs(q)
        recipeDoc.forEach((recipe) => {
            recipes.push(recipe.data()["Hi"])
        })
        
        return recipes
        } catch (error) {
            console.log(error)
        }
    }
}