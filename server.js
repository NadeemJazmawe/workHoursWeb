const express = require("express");
const app = express();

app.use(express.static("client/build"));

app.get('/*',(req, res)=>{
  res.sendFile(__dirname + '/client/build/index.html');
})

// Server run
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));