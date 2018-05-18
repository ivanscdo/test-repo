var express = require("express"),
    router  = express.Router(),
    db      = require("../models"),
    fetch   = require("node-fetch");


    

// router.get("/", function(req, res) {
//     // res.send("red wine, success!");
//     db.Test.findAll({}).then(function(data){
//         console.log("-db.Test:data-")
//         console.log(data);

//         var hbObj = {
//             users: data
//         };

//         res.render("index", hbObj);
//     });
// });
// module.exports = router;

router.get("/", function(req, res) {
    // res.send("red wine, success!");
    db.BirdPic.findAll({}).then(function(data){
        console.log("-db.Test:data-")
        console.log(data);

        var hbObj = {
            pics: data
        };

        res.render("bird-pic", hbObj);
        // res.send(data)
    });
});
module.exports = router;

// function fetch() {
//     fetch('http://localhost:3000/')
//     .then(function(res){
//         db.Test.findAll({}).then(function(data){
//             var hbObj = {
//                 users: data
//             };
//             res.render("index", hbObj);
//         });
//     });
    
// }


    // fetch('https://randomuser.me/api/?results=10')
    // .then(function(data) {
    //     data.json();
    // })





// module.exports = fetch;

