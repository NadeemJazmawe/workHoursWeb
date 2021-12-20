const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())
require("dotenv").config();

app.use(express.static("client/build"));

app.get('/', function (req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
})

//cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser())

mongoose.connect(process.env.DB_URL);

const userRouter = require("./routes/userRoute");
//router usage
app.use("/user", userRouter);

// Server run
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));