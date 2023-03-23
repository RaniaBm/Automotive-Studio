const sequelize = require('../server');

//To access the Datatypes
const { Sequelize, DataTypes } = require("sequelize");

// table creation and initialization
const products = sequelize.define("products", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = products;

sequelize.sync().then(() => {
    console.log('Products table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});