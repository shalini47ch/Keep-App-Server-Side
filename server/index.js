//This is basically  the entry point of aur express
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Keeper = require("./models/Keeper");
// const dotenv=require("dotenv");

const app = express();
app.use(express.json());
app.use(cors());
// dotenv.config();
app.use(express.urlencoded());

//mongo db atlas is down at the moment
mongoose.connect(
  "mongodb+srv://shalini47choudhary:Mxahg7yOdF7sJoz0@cluster0.r3myb.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.error("Error connecting to MongoDB:", err);
    } else {
      console.log("Connected to MongoDB successfully");
    }
  }
);

//we need 3 apis one for adding the keeper other for updating the keeper and the last for deleting the keeper
app.get("/", (req, res) => {
  res.send("Server running ");
});
app.get("/api/getKeeper", (req, res) => {
  //here we need to get all the data same logic as we added in addNewkeeper
  Keeper.find({}, (err, keeperList) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(keeperList);
    }
  });
});

//now the next one is to update the keeper app and that will be done by the post request
app.post("/api/addNewKeeper", (req, res) => {
  const { title, description } = req.body;
  const keeperObj = new Keeper({
    title,
    description,
  });
  console.log(keeperObj);
  keeperObj.save((err) => {
    console.log(err);
  });
  //now the next step is to return all the data we are obtaining from the backend to the frontend
  Keeper.find({}, (err, keeperList) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(keeperList);
    }
  });
});

app.post("/api/delete", (req, res) => {});

//now show the server on which it is running
app.listen(8000, () => {
  console.log("Server running on port number 8000");
});
