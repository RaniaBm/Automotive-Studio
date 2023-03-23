//To access those data types, add an import for DataTypes
const { Sequelize, DataTypes } = require("sequelize");

//and used Sequelize to connect with the database
const sequelize = new Sequelize(
    'automotive_studio_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

//export the file
module.exports = sequelize;