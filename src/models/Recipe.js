import { doc, getDocs, collection, query, limit } from 'firebase/firestore'
import { db } from '../firebase/FirebaseConfig'


export class RecipeVM {
    constructor() { }

    async getRecipes() {
        try {
            console.log("calling collection")
            const q  =  query(collection(db, "recipe"), limit(20))
            console.log("q recieved")
            const querySnapshot = await getDocs(q)
            console.log("query snapshot recieved")            
            const recipes = []
            querySnapshot.forEach((doc) => {
                console.log(`data: ${doc.data()}`)
                 recipes.push(doc.data())
            })
            return recipes
        } catch(error) {
            console.log(error)
        }
    }
}
