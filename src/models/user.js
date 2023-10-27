const dbConnect = require('../database/connectDB')
const mongoose = require('mongoose')
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema({
    email: { type: String, required: [true, "need email"] },
    password: { type: String, minLength: [3, "too short"], maxLength: [7, 'too long !'], required: true }
})
userSchema.virtual("repeatPassword").set(function (val) {
    if (val !== this.password) {
        throw new Error('wrong repeat !')
    }
})
userSchema.pre('save', async function(){
    const pass = this.password
    // const salt = await bcrypt.genSalt()
    // console.log(`salt is ${salt}`);
    const cryptPassword = await bcrypt.hash(pass, 4)
    this.password = cryptPassword
    console.log(`crypt number is ${cryptPassword}`);
    // next()
})
const userModel = mongoose.model('users', userSchema)
//
module.exports = userModel

