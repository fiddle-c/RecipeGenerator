import { doc, getDocs, collection, query, limit } from "firebase/firestore";
import db from '.../FirebaseConfig'

export class UserVM {
    constructor(props) {
        
    }

    async getUser(prop) {

        try {
            const user_doc = await getDocs(prop.userId)
        } catch {

        }
    }
}
