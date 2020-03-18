const router = require("express").Router();
let User = require("../models/user.model");

const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

// router.route("/add").post((req, res) => {
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const email = req.body.email;
//   const password = req.body.password;
//   const professor = Boolean(req.body.professor);
//   const subject = req.body.subject;

//   const newUser = new User({
//     firstName,
//     lastName,
//     password,
//     email,
//     professor,
//     subject
//   });

//   newUser
//     .save()
//     .then(() => res.json("User added!"))
//     .catch(err => res.status(400).json("Error: " + err));
// });

router.route("/signup").post(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  const { firstName, lastName, email, password, subject } = req.body;
  const professor = Boolean(req.body.professor);
  try {
    let user = await User.findOne({
      email
    });
    if (user) {
      return res.status(400).json({
        msg: "User Already Exists"
      });
    }

    user = new User({
      firstName,
      lastName,
      email,
      password,
      professor,
      subject
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save().then(() => res.json("User added!"));
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in Saving");
  }
});

router.route("/signin").post(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({
      email
    });
    if (!user)
      return res.status(400).json({
        message: "User Not Exist"
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        message: "Incorrect Password !"
      });

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      "secret",
      {
        expiresIn: 3600
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token
        });
      }
    );
    return res.json("Welcome " + user.firstName);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Server Error"
    });
  }
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("user deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.email = req.body.email;
      user.password = req.body.password;
      user.aboutSelf = req.body.aboutSelf;

      user
        .save()
        .then(() => res.json("user updated!"))
        .catch(err => res.status(400).json("Error :" + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/signin/:email").get((req, res) => {
  User.findOne({ email: req.params.email })
    .then(user => {
      if (user.password === req.body.password) {
        console.log("okey");
        return res.json("authenticated");
      }
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
