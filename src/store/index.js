import {ref} from "vue";
import { toast } from 'vue3-toastify';
import {auth, provider, signInWithPopup} from "../firebase/index.js";
import API from "../firebase/api.js";
import {defineStore} from "pinia";

const MAX_TOKENS = 10
export const useAppStore = defineStore('app', () =>{
    const user = ref(null)
    const cvArray = ref([])

    const tokens = ref(10)

    const getCvData = () => {
        API.getData('cv').then((data) => {
            cvArray.value = data
            tokens.value = MAX_TOKENS - cvArray.value.length
        })
    }

    const uploadCvData = (payload) => {
        if(!tokens.value) {
            toast.error('Need to top up your balance')
            return
        }
        return API.addData({...payload, name: user.value.email}).then(() => {
            toast.success('Successfully uploaded')
            cvArray.value.push({...payload, name: user.value.email})
            tokens.value = tokens.value - 1
        })
    }
    const init = () => {
        auth.onAuthStateChanged((u) => {
            user.value = u;
            if(u) {
                getCvData()
            }
        });
    }

    const signIn = () => signInWithPopup(auth, provider)

    return {
        init,
        user,
        tokens,
        cvArray,
        signIn,
        getCvData,
        uploadCvData,
    }
})
