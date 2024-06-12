import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from "./index.js";

const addData = async (data, col = 'cv') => {
    try {
        const docRef = await addDoc(collection(db, col), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const getData = async (col = 'cv') => {
    try {
        const result = []
        const querySnapshot = await getDocs(collection(db, col));
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
