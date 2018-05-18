var express = require("express"), 
    router  = express.Router(),
    db      = require("../models");

router.post("/api/test", function(req, res) {
    console.log("req.body");
    console.log(req.body);
    // console.log("req")   
    // console.log(req)   
    
    db.Test.create({
        username: req.body.username,
        password: req.body.password
    }).then(function(data){
        res.json(data);
    });
    // .catch(error)
});

router.post("/api/birdpic", function(req, res) {
    db.BirdPic.create({
        picname: req.body.picname, 
        picURL: req.body.picURL
        // picblob: URL.createObjectURL(req.body)
    }).then(function(data) {
        res.json(data);
    });
});


module.exports = router;