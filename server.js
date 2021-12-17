const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())
require("dotenv").config();

app.use(express.static("client/build"));

app.get('/test', (req, res)=>{
    res.send({"ok": true});
})

mongoose.connect(process.env.DB_URL);

const userRouter = require("./routes/userRoute");
//router usage
app.use("/user", userRouter);

// Server run
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));