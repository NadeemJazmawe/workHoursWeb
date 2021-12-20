const mongoose = require("mongoose");

const Tokens = new mongoose.Schema({
    Email: String,
    status: Boolean,
    expireAt: {
        type: Date,
        default: Date.now,
        expires: '10m',
    }
});

const Token = mongoose.model("Tokens", Tokens);
module.exports = Token;