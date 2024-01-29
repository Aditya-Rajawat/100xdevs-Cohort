const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://aditya:tuhTQNP8oCoXl1pO@cluster0.qgdt0.mongodb.net/"
);

// Define Schema's
const AdminSchema = new mongoose.Schema({
  // Schema definition
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition
  title: String,
  description: String,
  price: Number,
  imageLink: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
