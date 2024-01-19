import Validations from "./Validations";

export default class Invalidations{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    checkValidations() {
        let errors = [];
        //email validation
        if (!Validations.checkEmail(this.email)){
            errors['email'] = 'Invalid email';
        }
        //password validation
        if (!Validations.minLength(this.password, 6)){
            errors['password'] = 'Password must have minimum of 6 characters'
        }

        return errors;
    }
}