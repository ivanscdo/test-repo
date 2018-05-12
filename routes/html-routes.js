var express = require("express"),
    router  = express.Router(),
    db      = require("../models");

router.get("/", function(req, res) {
    // res.send("red wine, success!");
    db.Test.findAll({}).then(function(data){
        console.log("-db.Test:data-")
        console.log(data);

        var hbObj = {
            users: data
        };

        res.render("index", hbObj);
    });
});

module.exports = router;