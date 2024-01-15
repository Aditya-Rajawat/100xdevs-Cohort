const zod = require("zod");

function Validation (object) {
    const schema = zod.object({
        email : zod.toString(),
        password : zod.number().min(5)
    })
    const response = schema.safeParse(object)
    console.log(response)
}

Validation({
    email : "aditya@gmail.com",
    password : 3434343
})