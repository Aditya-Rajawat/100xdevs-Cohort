// Create a function which contains username and password, this function should return JWT(token) with username encoded.
// Also check if username and password entered is correct then return true otherwise return false using zod.

const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const port = 3000;
const jwtPassword = "secret";

const nameSchema = zod.string();
const passwordSchema = zod.string().max(4);

const app = express();

function signJwt(username, password) {
  const Realusername = nameSchema.safeParse(nameSchema);
  const Realpassword = passwordSchema.safeParse(passwordSchema);

  const token = jwt.sign({ Realusername }, jwtPassword);
  console.log(token);
  const verification = jwt.verify(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSZWFsdXNlcm5hbWUiOnsic3VjY2VzcyI6ZmFsc2UsImVycm9yIjp7Imlzc3VlcyI6W3siY29kZSI6ImludmFsaWRfdHlwZSIsImV4cGVjdGVkIjoic3RyaW5nIiwicmVjZWl2ZWQiOiJvYmplY3QiLCJwYXRoIjpbXSwibWVzc2FnZSI6IkV4cGVjdGVkIHN0cmluZywgcmVjZWl2ZWQgb2JqZWN0In1dLCJuYW1lIjoiWm9kRXJyb3IifX0sImlhdCI6MTcwNTY3MzcxNX0.alLX9rvmpHqrIU87wbe87G-lQPjmmdVjMppKmKzKz_c",
    jwtPassword
  );
  console.log(verification);
}

signJwt("ADITYA ONLY", "1234");

app.listen(port, () => {
    console.log(`App started on localhost ${port}`)
});

// const jwt = require("jsonwebtoken");
// const express = require("express");
// const zod = require("zod");
// const jwtPassword = "secret";

// const app = express();

// const emailSchema = zod.string().email()
// const passwordSchema = zod.string().min(6)

// function signJwt(username, password){
//     const usernameResponse = emailSchema.safeParse(username)
//     const passwordResponse = passwordSchema.safeParse(password)
//     if(!usernameResponse.success || !passwordResponse.success){
//         console.log(null)
//     }
//     const signature = jwt.sign({username}, jwtPassword)
//     console.log(signature, "done sir")
// }

// signJwt("adityarajawat04@gmail.com", "1224222222")

// app.listen(3000)
// // - Write a function that takes in a username and password and returns a JWT token with the username encoded.
// // Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
