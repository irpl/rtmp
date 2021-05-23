const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.post("/auth", (req, res) => {
  const key = req.body.key;

  if (key === process.env.STREAM_KEY) res.status(200).send();
  else res.status(403).send();
});

app.listen(8000, () => console.log("Auth server started"));
