const express = require("express");
const app = express();
const router = express.Router();
const userModel = require("./models/user");
var http = require('http');
const bodyParser = require('body-parser');
const cors=require("cors")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())

// Middleware to parse URL-encoded data

app.get("/", function (req, res) {
  res.sendFile(__dirname+"./index.html")
});

app.post("/register", async function (req, res) {
  try {
    const data = new userModel({
      name: req.body.name,
      course: req.body.course,
      admission_no: req.body.admission_no,
      contact: req.body.contact,
      description: req.body.description,
    });

    
    // Save the data to the database
    const savedData = await data.save();

    res.sendFile(__dirname+"/index.html");

    // res.status(201).json(savedData); // Send a JSON response with the saved data
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/register",async function(req,res){
    res.sendFile(__dirname+"/success.html");
})


const PORT = 5000;

app.listen(PORT, function () {
  console.log("Server running on port: ", PORT);
});

module.exports = router;