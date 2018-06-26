const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  port = 3001,
  app = express();

app.use(cors());
app.use(bodyParser.json());

let nums = [1, 2, 3, 4, 5];

app.get("/api/nums", (req, res) => {
  res.status(200).json(nums);
});
app.post("/api/nums/:num", (req, res) => {
  nums.push(req.params.num);
  res.status(200).json(nums);
});
app.put("/api/nums/:x/:y", (req, res) => {
  nums.forEach((c, i, a) => (c === x ? (a[i] = y) : null));
  res.status(200).json(nums);
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
