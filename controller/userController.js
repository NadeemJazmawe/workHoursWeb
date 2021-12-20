const Users = require("../schema/Users");
const nodemailer = require('nodemailer');
const Token = require("../Schema/Tokens");
const jwt = require('jsonwebtoken');
const res = require("express/lib/response");

exports.Login = async (req, res) => {
    const { ID, pass } = req.body;
    const user = await Users.findOne({ ID: ID });
    if (user != null) {
        if (pass != user.Password) {
            res.send({ "ok": false, "error": "wrong password!" });
        } else {
            res.send({ "ok": true });
        }
    }
    else {
        res.send({ "ok": false, "error": "user not found!" });
    }
}

exports.SignUp = async (req, res) => {
    const { ID, email, pass, phone } = req.body;
    const userToAdd = new Users({
        ID:ID,
        Password: pass,
        Email: email,
        Phone: phone
      });
      userToAdd.save().then(() => {
        console.log("user saved");
      });
    res.send({ "ok": true });
}

exports.ResetPass = async (req, res) =>{
    const {email} = req.body;
    console.log(process.env.pass);
    const user = await Users.findOne({Email: email});

    if(user != null){
      const _token = jwt.sign({ email: email, date: new Date(), status:false }, process.env.secret);
      const tok = new Token({
        Email: email,
        status: false
      })
      tok.save().then(() => {
        console.log("token saved");
      });
        const transporter = nodemailer.createTransport({           
             service: "gmail",
               auth: {
                    user: process.env.gmail,
                    pass: process.env.pass,
                 },
            });
            
            const mailData = await {
                from: 'webWorkHours@gmail.com',  // sender address
                  to: email,   // list of receivers
                  subject: 'Work Mail web Reset Password',
                  text: `http://localhost:3000/changePassword?token=${_token}`
                }; 
                transporter.sendMail(mailData, function (err, info) {
                    if(err)
                      console.log(err)
                    else
                      console.log(info);
                 });
    }
    else{
        res.send({"ok":false , "msg": "user not found"});
    }
}

exports.ChangePass = async (req, res) => {
  const {token} = req.query;
  const {newPass} = req.body;
  console.log({"token":token});
  jwt.verify(token, process.env.secret, function(err, decoded) {
    if(err){
      res.send({"ok":false , "msg":"token expired"})
    }
    else{
      console.log({"decoded":decoded.email})
      const flag  = Token.findOne({Email : decoded.email});
        if(flag != null){
          if(flag.status != false){
            res.send({"ok":false , "msg":"your password has been changed"});
          }
          else{
            const user = Users.updateOne({Email:decoded.email}, {Password: newPass}, function(err, result){
              if(err){
                res.send({"ok":false})
              }else{
                flag.updateOne({Email: decoded.Email}, {status: true}, function(err, resultToken){
                  if(err){
                    res.send({"ok":false});
                  }else{
                    res.send({"ok":true});
                  }
                })
              }
            })
          }
        }
    }

  });


}