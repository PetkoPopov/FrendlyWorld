const router = require('express').Router()
const userService = require("../services/userService")

router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/register', (req, res) => {
    res.render('register')
})
router.post("/register", async (req, res) => {
    const { email, password, repeatPassword } = req.body
    await userService.register({ email, password, repeatPassword })
    res.redirect('/login')

})
router.post("/login", async (req, res) => {
    // imposible to get user_Id 
    const { password, email } = req.body
    const tokenUser = await userService.login({ password, email })
    if (tokenUser) {
        res.cookie('FriendlyAnimal', tokenUser.token)
        res.locals.isAuth = "auth"
        res.locals.name_ = tokenUser.user.email
        console.log(`isAuth is set to true cookie set ${res.locals.name}`);
        res.render('home')
    } else {
        // res.locals={}
        res.clearCookie("FriendlyAnimal")
        res.redirect('/register')
    }

})
router.get('/logout', (req, res) => {
    res.clearCookie("FriendlyAnimal")
    res.redirect('/login')
})

module.exports = router


