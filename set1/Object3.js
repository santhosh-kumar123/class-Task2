const user = {
    email: "e@mail.com",
    password:"12345"
}
const update = ({ email, password }) => {
    if (email) {
        Object.assign(user,{email})
    }
    if (password) {
        user.password=password
    }
    return user
}
const updateUser = updateUser({ email: "new@email.com" })
console.log(updateUser===user);