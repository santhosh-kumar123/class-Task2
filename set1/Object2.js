const user = {
    email: "my@email.com",
    update: email => {
        this.email=email
    }
}
user.update("new@email.com")
console.log(user.email);