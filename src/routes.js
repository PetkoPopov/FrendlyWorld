const router = require("express").Router()
const userController = require('../src/controllers/userController')
const animalsController = require('../src/controllers/animalsController')

router.use('/user', userController)
router.use('/animals', animalsController)
router.use('/', (req, res, next) => {
    res.render('home')

})
//

module.exports = router