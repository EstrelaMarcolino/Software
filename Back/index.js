require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
require('./db')


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "/*");
    res.header("Access-Control-Allow-Methods", 'GET,POST','PUT','DELETE');
    app.use(cors())
    next();
})
app.use(cors())

const PicRoute = require("./routes/Pic")
const user = require("./routes/Usuario")
const product = require("./routes/Produto")
const compra = require("./routes/Compra")
const stripe = require("./routes/stripe")
const card = require("./routes/Cartao")
const modelo = require("./routes/Modelo")
const album = require("./routes/Album")
const agencia = require("./routes/Agencia")

app.use("/modelo", modelo)
app.use("/album", album)
app.use("/agencia", agencia)
app.use("/pic", PicRoute)
app.use("/auth", user)
app.use("/product", product)
app.use("/compra", compra)
app.use("/pay", stripe)
app.use("/card", card)


const PORT=process.env.PORT
app.listen(PORT, console.log("Servidor Inicializado Na " + "PORT:" + PORT))