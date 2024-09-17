export const checkValidData = (email, password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if (!isEmailValid) {
        return "Invalid email"
    }

    if (!isPasswordValid) {
        return "Use Combination of Uppercase Letters, Numbers and Symbols. Minimum 8 characters required."
    }

    return null;

}