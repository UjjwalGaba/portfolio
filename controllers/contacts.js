var express = require('express');
var router = express.Router();

/* GET contacts page. */
router.get('/', function(req, res, next) {
    res.render('contacts/index', { title: 'Contact Me' });
});


module.exports = router;