const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://aditya:WfEGdxDkbe99A2EE@cluster0.qgdt0.mongodb.net/userappnew")

const User = mongoose.model('Users', {username : String, password : String, email : String })

const user = new User ({
    username : "aditya",
    password : '12345',
    email : "adityarajawat04@gmail.com"
})

user.save();