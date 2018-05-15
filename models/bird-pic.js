module.exports = function(sequelize, DataTypes) {
    var BirdPic = sequelize.define("BirdPic", {
        picname: DataTypes.STRING, 
        picfile: DataTypes.BLOB
    });
    return BirdPic;
};