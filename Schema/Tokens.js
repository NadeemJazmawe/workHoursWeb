const mongoose = require("mongoose");

const Tokens = new mongoose.Schema({
    Email: String,
    status: Boolean,
    Date: Date,
    token1:String,
    expireAt: {
        type: Date,
        default: Date.now,
        expires: '10m',
    }
});

const Token = mongoose.model("Tokens", Tokens);
module.exports = Token;