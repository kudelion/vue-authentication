export default class Validations {
    // This is the if conditon for password validation
    static checkEmail(email) {
        if (
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email,
            )
        ){
            return true;
        }
        return false;       
    }
    // This is the if conditon for email validation
    static minLength(name, minLength){
        if (name.length < minLength){
            return false;
        }
        return true;
    }
}