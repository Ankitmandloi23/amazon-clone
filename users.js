import bcrypt from "bcryptjs"

export const users =[
    {
        name: "Ankitmandloi",
        email: "ankitmandloi23@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: true,
    },
    {
        name: "Rohan Das",
        email: "rohan67@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: false,
    },
]
