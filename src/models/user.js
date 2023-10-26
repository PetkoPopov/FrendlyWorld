const dbConnect = require('../database/connectDB')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: { type: String, required: [true, "need email"] },
    password: { type: String, minLength: [3, "too short"], maxLength: [7, 'too long !'], required: true }
})
userSchema.virtual("repeatPassword").set(function (val){
    if(val !== this.password){
        throw new Error('wrong repeat !')
    }
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel

