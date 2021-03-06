const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//models import
import User from "../models/user.js";

//AUTH
router.post("/register", async (req, res) => {
  try {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const encryptedPassword = bcrypt.hashSync(password, 10);

    const newUser = {
      name: name,
      email: email,
      password: encryptedPassword
    };

    var user = await User.create(newUser);

    console.log(user);

    const toSend = {
      status: "success"
    };

    res.status(200).json(toSend);

  } catch (error) {

      console.log("ERROR - REGISTER ENDPOINT")
      console.log(error);

      const toSend = {
        status: "error",
        error: error
      };

      res.status(500).json(toSend);

  }
});

router.post("/login", async (req, res) => {


  const email = req.body.email;
  const password = req.body.password;

  var user = await User.findOne({email: email});

  //if no email
  if(!user){ //user = null
      const toSend = {
          status: "error",
          error: "Invalid Credentials"
      }
      return res.status(401).json(toSend);
  }

  //if password and email ok
  if (bcrypt.compareSync(password, user.password)){

      user.set('password', undefined, {strict: false});

      const token = jwt.sign({userData: user}, 'securePasswordHere', {expiresIn: 60 * 60 * 24 * 30});

      const toSend = {
          status: "success",
          token: token,
          userData: user
      }

      return res.json(toSend);

  }else{ //if email ok and password nok
      const toSend = {
          status: "error",
          error: "Invalid Credentials"
      }
      return res.status(401).json(toSend);
  }
});

router.get("/new-user", async (req, res) => {

    try {
        const user = await User.create({
            name: "Benjamin",
            email: "a@b.com",
            password: "121212"
          });
          res.json({"status":"success"})
    } catch (error) {
        console.log(error);
        res.json({"status":"fail"});
    }
});

module.exports = router;
