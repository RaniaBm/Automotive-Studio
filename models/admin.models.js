const sequelize = require('../server');

//To access the Datatypes
const { Sequelize, DataTypes } = require("sequelize");

// table creation and initialization
const admin = sequelize.define("admin", {
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

module.exports = admin;

 sequelize.sync().then(() => {
    console.log('Admin table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });