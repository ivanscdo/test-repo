// var express = require("express"),
//     router  = express.Router(),
//     fetch   = require("node-fetch");

// fetch('/api/test')
//         .then(
//             function(response) {

//                 if (response.status !== 200) {
//                     console.log('Looks like there was a problem. Status Code: ' +
//                     response.status);
//                     return;
//                 }

//                 // Examine the text in the response
//                 response.json().then(function(data) {
//                     console.log(data);
//                 });
//             //END OF: function(response) {
//             }
//         // END OF: .then(   
//         )
//         .catch(function(err) {
//             console.log('Fetch Error :-S', err);
//         });

//   module.exports = router;