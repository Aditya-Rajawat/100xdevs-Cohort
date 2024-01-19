const jwt = require("jsonwebtoken");
const express = require("express");
const zod = require("zod");
const jwtPassword = "secret";

const app = express();

const emailSchema = zod.string().email()
const passwordSchema = zod.string().min(6)

function signJwt(username, password){
    const usernameResponse = emailSchema.safeParse(username)
    const passwordResponse = passwordSchema.safeParse(password)
    if(!usernameResponse.success || !passwordResponse.success){
        console.log(null)
    }
    const signature = jwt.sign({username}, jwtPassword)
    console.log(signature, "done sir")
}

signJwt("adityarajawat04@gmail.com", "1224222222")

app.listen(3000)
// - Write a function that takes in a username and password and returns a JWT token with the username encoded. 
// Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
