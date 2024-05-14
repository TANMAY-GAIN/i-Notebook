const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
const fetchUser = require("../Middleware/fetchUser");
const JWT_SECRET = "tanmaygain";

// route 1
router.post(
  "/CreateUser",
  [
    body("email", "Enter a vlid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let sucess = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ sucess, errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ sucess , error: "Sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: { id: user.id },
      };
      const awtToken = jwt.sign(data, JWT_SECRET);
      sucess = true;
      res.json({ sucess , awtToken });
      //res.json(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internel server error");
    }
  }
);
// Route 2
router.post(
  "/login",
  [
    body("email", "Enter a vlid email").isEmail(),
    body("password", "password cannot be blank ").exists(),
  ],
  async (req, res) => {
    let sucess = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        sucess = false
        return res
          .status(400)
          .json({ error: "Please try to login correct information" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        sucess = false
        return res
          .status(400)
          .json({ sucess , error: "Please try to login correct information" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const awtToken = jwt.sign(data, JWT_SECRET);
      sucess = true
      res.json({ sucess , awtToken });

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internel server error");
    }
  }
);
// route 3
router.post("/getuser", fetchUser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internel server error");
  }
});
module.exports = router;
