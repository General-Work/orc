
let password = {
    hasSixChars: false,
    hasDigit: false,
    hasLowercase: false,
    hasUppercase: false,
    hasSpecialChar: false,
}
export const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
}

export const isValidPassword = (val) => {
    if( val.trim().length > 5 && /[A-Z]/.test(val) && /[a-z]/.test(val) && /[0-9]/.test(val) && 
       /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(val)
    )
        return val   
}