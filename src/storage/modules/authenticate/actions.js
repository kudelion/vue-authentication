import { Axios } from "axios";
import {SIGNUP_ACTION} from '@/storage/storeConstants'

export default {
    //Signup method
    async [SIGNUP_ACTION](_, payload){
        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
        };
        
        let response = await Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcyDErKyeqPz_Q7dGG9ZzQ0ITNx-dwTts',
            postData,
        ); 
        console.log(response);
    },
};