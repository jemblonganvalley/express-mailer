const sequelize = require("./connection")
const { DataTypes } = require("sequelize")

const User = sequelize.define("user", {
    username : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true,
        validate : {
            len : {
                args : [6,100]
            }
        }
        
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true,
        validate : {
            isEmail : true
        }
    },
    phone : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true,

    },
    password : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            len : {
                args : [6,100]
            }
        }
    }
 
})


module.exports = { User }