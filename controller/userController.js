const Users = require("../schema/Users");
const nodemailer = require('nodemailer');
const Token = require("../Schema/Tokens");
const jwt = require('jsonwebtoken');
const res = require("express/lib/response");
const User = require("../schema/Users");

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
      const _token = jwt.sign({ email: email, date: new Date() }, process.env.secret);
      const tok = new Token({
        token1 : _token,
        Email: email,
        status: false,
        Date: new Date()
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
  const { newPass } = req.body;
  const { token } = req.query;

  const searchToken = await Token.findOne({ token1:token });
  if (searchToken === null) {
    res.send({ ok: false, message: "change password Failed" });
  }
  else if (!searchToken.status) {
    try {
      jwt.verify(token, process.env.secret, (err, data) => {
        if (err) {
          console.log(err);
          res.send({ ok: false });
        }
        else {
          const timeOver = (new Date() - new Date(data.date)) / 60000.;
          console.log(`time: ${timeOver} minutes`);
          if (timeOver < 10) {
            User.updateOne(
              { Email: data.email },
              { Password: newPass },
              function (err, result) {
                if (err) {
                  res.send(err);
                } else {
                  Token.updateOne({ token1: token }, { status: true }, function (err, result) { if (err) { console.log("error token!"); } else { console.log("token status changed!") } });
                  res.send({ ok: true, msg: `password changed sucessfuly for ${data.email} ` });
                }
              }
            );
          }
          else {
            res.send({ ok: false, msg: `password cannot be changed due to time over!` });
          }
        }
      })
    }
    catch (e) {
      res.send({ ok: false, msg: "error!" });
    }
  }
  else {
    res.send({ ok: false, msg: "password already changed!" });
  }
}