const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
var session = require("express-session");
var multer = require("multer");
const fs = require("fs");

require("dotenv").config();

const app = express();

require("./config/passport")(passport);

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/");
  },
  filename: function(req, file, cb) {
    var filename = file.originalname;
    cb(null, req.query.id + "_" + filename);
  }
});

var upload = multer({ storage: storage }).single("file");

app.post("/upload", (req, res) => {
  upload(req, res, err => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

app.get("/display/:id", (req, res) => {
  var id = req.query.id;
  var filess = [];
  var filePath = "./public/"; // Or format the path using the `id` rest param
  fs.readdir(filePath, (err, files) => {
    files.forEach(file => {
      var res = file.split("_");
      if (res[0] == id) {
        var file1 = file.replace(res[0] + "_", "");
        filess.push(file1);
      }
    });
    res.send(filess);
  });
});

app.get("/download/:id", (req, res) => {
  var id = req.query.id;
  var filename = req.query.fileName;
  var filepath = "./public/";
  const fileToSend = filepath + id + "_" + filename;
  res.download(fileToSend);
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully");
});
//Express Session
app.use(
  session({
    cookie: {
      path: "/",
      maxAge: 360000
    },
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

// Socket.io
var server = require("http").createServer(app);
var io = require("socket.io")(server);

io.on("connection", socket => {
  console.log(socket.username);
  console.log("a user connected");
  socket.broadcast.emit("Hello, let's chat");

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });

  socket.on("message", msg => {
    console.log("message: " + msg);
    socket.broadcast.emit("message", msg);
  });

  socket.broadcast.emit("message", " a user has entered");
});
server.listen(port, () => {
  console.log("Server listens on port: " + port);
});

// app.listen(port, () => {
//   console.log("Server is running on port: " + port);
// });
