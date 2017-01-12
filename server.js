var http = require("http");
var http = require("express");
var app = express();
//var ejsEngine = require("ejs-locals");
var controllers = require("./controllers");


//Setup the View Engine
//app.engine("ejs", ejsEngine);  // Support master pages.
app.set("view engine", "vash")  

// Map the routes
controllers.init(app);


app.get("/api/users", function (req, res) {
	res.set("Content-Type", "application/json");  // Add Headers
	res.send({ name: "Jeff", isValid: true, group: "Admin" });
});

var server = http.createServer(app);

server.listen(3000);