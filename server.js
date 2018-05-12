var express     = require("express"),
    bodyParser  = require("body-parser"),
    app         = express(),
    PORT        = process.env.PORT || 3000,
    htmlRoutes  = require("./routes/html-routes"),
    apiRoutes   = require("./routes/api-routes"),
    db          = require("./models");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.use(htmlRoutes);

db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on: http://localhost:"+PORT);
    });
});