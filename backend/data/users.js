import bcrypt from "bcryptjs";

const user = [
    {
        name: "Matthew",
        email: "mateosutil@gmail.com",
        password: bcrypt.hashSync('P@ssw0rd', 10),
        isAdmin: true
    },
    {
        name: "marites",
        email: "marites@gmail.com",
        password: bcrypt.hashSync('P@ssw0rd', 10)
    },
    {
        name: "marife",
        email: "marife@gmail.com",
        password: bcrypt.hashSync('P@ssw0rd', 10)
    }
]

export default user;