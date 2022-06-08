fetch("https://api.github.com/users")
    .then(res => res.json())
.then(res=>console.log(res))