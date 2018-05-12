var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    exphbs      = require("express-handlebars"),      
    htmlRoutes  = require("./routes/html-routes"),
    apiRoutes   = require("./routes/api-routes"),
    PORT        = process.env.PORT || 3000,    
    db          = require("./models");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(apiRoutes);
app.use(htmlRoutes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on: http://localhost:"+PORT);
    });
});