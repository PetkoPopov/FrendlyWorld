const router = require('express').Router()


router.get("/add", (req, res) => {
    res.render('create')
})
module.exports = router