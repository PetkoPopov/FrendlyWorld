const jsonwebtoken = require('jsonwebtoken')
const {SECRET} = require('../constants')
const userModel = require('../models/user')

exports.sign = (user) => {

    const payload = { _id: user.id, email: user.email }
    const option = { expiresIn: '12h' }
    const token = jsonwebtoken.sign(payload, SECRET, option)
    return token
    
}