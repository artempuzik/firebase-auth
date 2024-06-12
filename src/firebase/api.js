import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import {db} from "./index.js";

const addData = async (data, col = 'cv') => {
    try {
        const docRef = await addDoc(collection(db, col), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const getData = async (col = 'cv', email) => {
    try {
        const result = []
        const q = query(collection(db, col), where("email", "==", email));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            result.push(doc.data());
        });
        return result
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


export default {
    addData,
    getData,
}
