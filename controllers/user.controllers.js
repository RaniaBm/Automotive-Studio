const User = require('../models/user.models');

//import admin file from models
const sequelize = require('../models/user.models');

sequelize.sync().then(() => {
    console.log('User table created successfully!');

    User.create({
        id: 1,
        email: "mustajabajwah@gmail.com",
        password: "123"
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
    User.create({
        id: 2,
        email: "aimmichamps@gmail.com",
        password: "123"
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});