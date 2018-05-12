module.exports = function(sequelize, DataTypes) {
    var Test = sequelize.define("Test", {
        username: DataTypes.STRING,
        password: DataTypes.STRING, 
    });
    return Test;
};