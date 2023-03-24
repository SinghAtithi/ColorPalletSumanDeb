const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5005;

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let currColor = "#7AA874";

app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
});

app.post("/changeColor", (req, res) => {
      const newColor = req.body.newColor;
      console.log(newColor);
      currColor = newColor;
      res.send(`Color changed to ${currColor}`);
});

app.get("/currColor", (req, res) => {
      console.log(currColor);
      console.log("Request received for current color");
      res.send({ currColor: currColor });
});
