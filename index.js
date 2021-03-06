const express = require("express")
const cors = require("cors")
const sequelize = require("./model/connection")
const user = require("./routes/user_routes")
const page = require("./routes/page_routes")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT
const path = require("path")

//MIDDLEWARE
app.use(cors())
app.use(express.json({limit : "100mb"}))
app.use(express.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname, "./static")))

//CONNECTION
sequelize.sync({force : true})
.then(()=>{
    console.log("connect to database")
})
.catch(err => {
    console.log(err)
})

//ROUTE
app.use("/api", user)
app.use("/", page)

app.listen(PORT, ()=>{
    console.log("listen port " + PORT)
})