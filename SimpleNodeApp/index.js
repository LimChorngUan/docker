const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Oh my gosh I haven't been writing node for more than a year");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});