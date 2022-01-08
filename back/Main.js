const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./database/db");

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// gets the build from the file
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

app.get("/test", (req, res) => {
  res.json({ message: "Welcome " });
});

// finnhub api

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "c7d0pf2ad3idhma6ggp0";

const finnhubClient = new finnhub.DefaultApi();

// finnhubClient.quote("AAPL", (error, data, response) => {
//   console.log(data.c);
// });

// ok

//alphaadvantage
// api key 0NUTUP4V6WL4XB8N
("use strict");
var request = require("request");

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url =
  "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo";

request.get(
  {
    url: url,
    json: true,
    headers: { "User-Agent": "request" },
  },
  (err, res, data) => {
    if (err) {
      console.log("Error:", err);
    } else if (res.statusCode !== 200) {
      console.log("Status:", res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      var values = [];
      for (var key in data["Global Quote"]) {
        // values.push(data["Global Quote"][key]["05. price"]);
        values.push(data["Global Quote"][key]);
      }
      // console.log(data);
      // this is the price in USD
      console.log(values[4]);
    }
  }
);

// get specific stonk quote

api.get("/getStockQuote", (req, res) => {});
