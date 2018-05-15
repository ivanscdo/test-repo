module.exports = function(sequelize, DataTypes) {
    var BirdPic = sequelize.define("BirdPic", {
        picname: DataTypes.STRING, 
        picblob: DataTypes.BLOB
    });
    return BirdPic;
};