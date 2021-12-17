const Users = require("../schema/Users");

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