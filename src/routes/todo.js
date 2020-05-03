var express = require('express');
var route = express.Router();

route.get('/',function(req, res){
    var result = {
        "test":"test"
    }
    res.send(result);
})

module.exports = route;

