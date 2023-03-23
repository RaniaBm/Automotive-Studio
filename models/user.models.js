const sequelize = require('../server');

//To access the Datatypes
const { Sequelize, DataTypes } = require("sequelize");

// table creation and initialization
const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;

 sequelize.sync().then(() => {
    console.log('User table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });