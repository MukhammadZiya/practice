console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");


//route

app.get("/hello", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

app.get("/gifts", function (req, res) {
  res.send("<h1>Siz sovgalar bolimidasiz</h1>");
});


const server = http.createServer(app);
let PORT = 3003;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port ${PORT}`);
});
