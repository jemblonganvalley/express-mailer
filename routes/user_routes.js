const express = require("express")
const { User } = require("../model/Model")
const { wellcomeMail } = require("../service/mailer")
const user = express.Router()

user.post("/user/create_user", (req, res) => {
    const data = req.body
    User.create(data)
        .then(result => {
            wellcomeMail(data.email, data.username)
                .then(() => {
                    res.status(201).json({
                        success: true,
                        data: result
                    })
                })
                .catch()
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                error: err
            })
        })
})


module.exports = user