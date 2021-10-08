// use express
let express = require('express')

// instantiate an express router to pass the direct url request
let router = express.Router()

//GET: /artists -> some index view
router.get('/', (req, res) => {
    res.render('artists/index')
})

// make public
module.exports = router