const admin = require('../models/admin.models');

//import admin file from models
const sequelize = require('../models/admin.models');

sequelize.sync().then(() => {
    console.log('Admin table created successfully!');

    // To insert a new record 
    admin.create({
        id: req.body.id,
        email: req.body.email,
        password: "123"
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });

    // // to retreive data from the table
    // sequelize.sync().then(() => {

    //     admin.findAll().then(res => {
    //         console.log(res)
    //     }).catch((error) => {
    //         console.error('Failed to retrieve data : ', error);
    //     });

    // }).catch((error) => {
    //     console.error('Unable to create table : ', error);
    // });

    // //to delete data from the table
    // sequelize.sync().then(() => {

    //     admin.destroy({
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

module.exports = { login }