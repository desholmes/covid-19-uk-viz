/* eslint-disable */
const path = require("path");
const express = require("express");
const port = process.env.PORT;

const app = express();
const REACT_DOM_FILE = "index.html";

app.use(express.static(`${__dirname}/build`));

app.set("etag", false);

app.get("/*", (req, res) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");

  res.sendFile(path.join(__dirname, `build/${REACT_DOM_FILE}`), {});
});

app.listen(port, "0.0.0.0", err => {
  if (err) {
    console.log(err);
  }
  console.info(
    "===> HTTP server listening on port " +
      port +
      ". Open up http://0.0.0.0:" +
      port +
      " in your browser.",
  );
});
