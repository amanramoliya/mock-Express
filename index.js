var express = require('express');
var app = express();

const userList = [{
    "id": 1,
    "name": "user1"
},
{
    "id": 2,
    "name": "user2"
}]

app.get('/', function (req, res) {
    res.send("Hello world!");
});

app.get('/user', function (req, res) {
    res.json(userList);
});




app.listen(5000, () => { console.log("server startrd") });