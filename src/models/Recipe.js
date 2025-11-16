import { doc, getDocs, collection, query, limit } from 'firebase/firestore'
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/FirebaseConfig'


export class RecipeVM {
    constructor() { }


    async getUserUrl(id) {
        const imageRef = ref(storage, `/users/${id}/${id}.jpeg`);
        return await getDownloadURL(imageRef).then((url) => {
            return url;
        }).catch((error) => {
            console.log(error)
        });
    }
    async getRecipes() {
        try {
            const q  =  query(collection(db, "recipe"), limit(20))
            const querySnapshot = await getDocs(q)
            const recipes = []
            querySnapshot.forEach((doc) => {
                 recipes.push(doc.data())
            })
            return recipes
        } catch(error) {
            console.log(error)
        }
    }
}
