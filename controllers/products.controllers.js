const products = require('../models/products.models');

//import products file from models
const sequelize = require('../models/products.models');


sequelize.sync().then(() => {
    console.log('Product table created successfully!');

    // // To insert a new record 
    // products.create({
    //     id: 1,
    //     productName: "XPE300",
    //     companyName: "Jaguar",
    //     model: 2016,
    //     price: 300000000
    // }).then(res => {
    //     console.log(res)
    // }).catch((error) => {
    //     console.error('Failed to create a new record : ', error);
    // });

    // products.create({
    //     id: 2,
    //     productName: "Sedan",
    //     companyName: "BMW",
    //     model: 1916,
    //     price: 400000000
    // }).then(res => {
    //     console.log(res)
    // }).catch((error) => {
    //     console.error('Failed to create a new record : ', error);
    // });

    // // To get all the records
    // sequelize.sync().then(() => {

    //     products.findAll().then(res => {
    //         console.log(res)
    //     }).catch((error) => {
    //         console.error('Failed to retrieve data : ', error);
    //     });

    // }).catch((error) => {
    //     console.error('Unable to create table : ', error);
    // });

    //  //to delete data from the table
    // sequelize.sync().then(() => {

    //     products.destroy({
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