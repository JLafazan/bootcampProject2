module.exports = function (sequelize, DataTypes) {
    var Fav = sequelize.define("Favorite", {
        //Somehow grab the events id and users id
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    })
}