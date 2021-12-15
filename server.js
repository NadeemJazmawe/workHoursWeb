const express = require("express");
const app = express();

app.use(express.static("client/build"));

app.get('/test', (req, res)=>{
    res.send({"ok": true});
})

app.get('/login', (req, res)=>{
    // const {userName} = req.body;
    // console.log({"userName":userName});
    res.send({"ok":true});
})

// Server run
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));