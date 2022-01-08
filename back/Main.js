const express = require("express");
const app = express();
const path = require("path");

const cors = require("cors");
const pool = require("./db");

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//
app.listen(3001);
// app.js running  in exprss

// Dont need cors with this method, because they are running on different ports, to share resoureces

// to edit front end,
// make change, then run bpm build again, copy to back end(from front en)
//     "build": "react-scripts build && xcopy", (windows, auto?)

app.get("/", (req, res) => {
  res.json({ message: "Welcome " });
});
