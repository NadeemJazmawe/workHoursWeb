const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    ID: String,
    Password: String,
    Email: String,
    Phone: String
});

const User = mongoose.model("Users", UserSchema);
module.exports = User;