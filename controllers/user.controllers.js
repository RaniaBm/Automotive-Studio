const User = require('../models/user.models');

//import admin file from models
const sequelize = require('../models/user.models');

sequelize.sync().then(() => {
    console.log('User table created successfully!');

    // // To insert a new record 
    // User.create({
    //     id: 1,
    //     email: "mustajabajwah@gmail.com",
    //     password: "123"
    // }).then(res => {
    //     console.log(res)
    // }).catch((error) => {
    //     console.error('Failed to create a new record : ', error);
    // });
    // User.create({
    //     id: 2,
    //     email: "aimmichamps@gmail.com",
    //     password: "123"
    // }).then(res => {
    //     console.log(res)
    // }).catch((error) => {
    //     console.error('Failed to create a new record : ', error);
    // });

    // // To get all the records
    // sequelize.sync().then(() => {

    //     User.findAll().then(res => {
    //         console.log(res)
    //     }).catch((error) => {
    //         console.error('Failed to retrieve data : ', error);
    //     });

    // }).catch((error) => {
    //     console.error('Unable to create table : ', error);
    // });

    // //to delete data from the table
    // sequelize.sync().then(() => {

    //     User.destroy({
    //         where: {
    //             id: 2
    //         }
    //     }).then(() => {
    //         console.log("Successfully deleted record.")
    //     }).catch((error) => {
    //         console.error('Failed to delete record : ', error);
    //     });

    // }).catch((error) => {
    //     console.error('Unable to create table : ', error);
    // });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});