var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/scripts", express.static(__dirname + '/scripts'));
// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});
// add other routes below
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/about.html'));
});
app.get("/users", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});
app.listen(process.env.PORT || 8080, function(){
    console.log("Listening...");
});
app.post("/scrape", (req, res, next) => {
    if (res.statusCode === 200) {
        get_source(res, req);
    } else {
    }
});
const get_source = function(res, req) {
    var request = require("request");
    request(
        { uri: req.body.url },
        function(error, response, body) {
            res.json(body);
        }
    );
}