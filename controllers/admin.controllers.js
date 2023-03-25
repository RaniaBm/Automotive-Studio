const admin = require('../models/admin.models');

//import admin file from models
const sequelize = require('../models/admin.models');

sequelize.sync().then(() => {
    console.log('Admin table created successfully!');

    // // To insert a new record 
    //    admin.create({
    //        id: 1,
    //        email: "raniabm21@gmail.com",
    //        password: "123"
    //    }).then(res => {
    //        console.log(res)
    //    }).catch((error) => {
    //        console.error('Failed to create a new record : ', error);
    //    });

    sequelize.sync().then(() => {

        admin.findAll().then(res => {
            console.log(res)
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });

    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});