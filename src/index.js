const express = require("express")
const { PORT } = require("../src/constants")
const handleBars = require('express-handlebars')
const { engine } = require("express-handlebars")
const path = require('path')
const router = require('../src/routes')


const app = express()

// router.use('/user',userController)
app.engine('hbs', engine({ extname: "hbs" }))
app.set('view engine', 'hbs')
app.set('views', path.resolve(__dirname, 'views'))

app.use('/', express.static(path.resolve(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }));//не вземаш ПОСТ формата

app.use(router)


app.listen(PORT, () => { console.log(`Server is runing ${PORT}`); })