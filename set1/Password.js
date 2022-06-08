const createMessage = ({ email, address = {} }) => {
    const validEmail = /.+\@.+\..+/.test(email)
    if (!validEmail) throw new Error("Valid email pls")
    return {
        email,
        address:address?address:null
    }
}
const member = createMessage({ email: "my@email.com" })
console.log(member);
//{ email: 'my@email.com', address: {} }