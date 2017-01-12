var http = require("http");
var http = require("express");
var app = express();

//Setup the View Engine
app.set("view engine", "jade")


app.get("/", function (req, res) {
	res.render("jade/index", { title: "Express + Jade" });
});

app.get("/api/users", function (req, res) {
	res.set("Content-Type", "application/json");  // Add Headers
	res.send({ name: "Jeff", isValid: true, group: "Admin" });
});

var server = http.createServer(app);

server.listen(3000);