const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())

app.use(express.static("client/build"));

app.get('/test', (req, res)=>{
    res.send({"ok": true});
})

const url = "mongodb+srv://test-website567:Nn123456@nadeem-cluster.hevx3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ;//"mongodb://127.0.0.1:27017";
mongoose.connect(url);

const Users = mongoose.model('Users', { ID: String, Password:String, Email:String, Phone:String });

const user = new Users({ ID: 'nadeem', Password:"admin", Email:"nadeem@gmail.com", Phone:"0500" });
// user.save().then(() => console.log('meow'));

app.post('/signup', (req, res)=>{
    const {ID, pass} = req.body;
    console.log({"ID":ID});
    res.send({"ok":true});
})

// Server run
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));