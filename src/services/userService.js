const db = require('../database/connectDB')
const userModel = require('../models/user')
const { sign } = require("../lib/jwt")
const bcrypt = require("bcrypt")

exports.register = async (data) => {
    // console.log(data.repeatPassword);
    await userModel.create(data)
    return userModel
}
exports.login = async (data) => {
    //check if exists

    const user = await userModel.find({ email: data.email })
    const isPassCorrect = await bcrypt.compare(data.password, user[0].password)
    if (user && isPassCorrect) {
        const token = sign(user[0])
        console.log(token);

        return { token: token, user: user[0] }
    } else {
        console.log('No User from Services !');
        return ""
    }


}
exports.logout = () => {


}