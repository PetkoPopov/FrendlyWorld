const mongoose = require('mongoose')
const { DB_URL } = require('../constants')

const dbConnection = mongoose.connect(DB_URL)
dbConnection.then(() => { console.log("you connected with DB !"); }).catch(() => { })
module.exports = dbConnection