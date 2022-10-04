const express = require('express')
const app = express()
const env = require("dotenv")
env.config({path:"./config/.env"})
const cors =require("cors")
const db = require("./config/db")
const Image =require("./routes/Video_routes")
db()
app.use(express.json())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.use(cors())
app.use("/api/v1",Image)

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT ||5000}`))

