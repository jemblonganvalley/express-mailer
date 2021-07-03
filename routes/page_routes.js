const express = require("express")
const page = express.Router()
const path = require("path")

page.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "../static/index.html"))
})

page.get("/register", (req,res)=>{
    res.sendFile(path.join(__dirname, "../static/register.html"))
})

module.exports = page