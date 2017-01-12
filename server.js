var http = require("http");
var http = require("express");
var app = express();

app.get("/", function (req, res) {
	res.send("<html><body><h1>" + req.url + "</h1></body></html>");
});

app.get("/api/users", function (req, res) {
	res.set("Content-Type", "application/json");  // Add Headers
	res.send({ name: "Jeff", isValid: true, group: "Admin" });
});

var server = http.createServer(app);

server.listen(3000);