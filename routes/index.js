var express = require('express');
var router = express.Router();

//GET index.html
router.get('/', function(req, res, next) {
    var local = req.get('host');
    res.render('index', { host: local });
});

module.exports = router;