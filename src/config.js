const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb : //localhost:27017/Login-tut");


connect.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.error("Database cannot be connected:");
});

const LoginSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("users", LoginSchema);

module.exports = collection;
