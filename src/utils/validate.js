export const checkValidData = (email, password, fullName) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test([password]);
    const isNameValid = /^[a-zA-Z ]{2,}$/.test(fullName);
    if(fullName != undefined && fullName !== null){
        if(!isNameValid) return "Name is not valid.";
    }
    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";
    
    return null;
}