const express = require("express");
const server = express();

server.all(`/`, (req, res) => {
  res.send("Toomy Is Online");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Host Is Online");
  });
}

module.exports = keepAlive;