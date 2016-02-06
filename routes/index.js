var express = require('express'),

    // express router
    router = express.Router(),

    // custom errors
    HttpError = require('../error').HttpError,

    // subroutes
    main = require('./main'),
    login = require('./login'),
    logout = require('./logout'),
    profile = require('./profile'),


    // middelwares
    checkAuth = require('../middleware/checkAuth');


/**
 * Method: GET
 * */

/* GET home page. */
router.get('/', checkAuth, main.get);

/* GET login page. */
router.get('/login', login.get);

/* GET login page. */
router.get('/logout', checkAuth, logout.get);

/* GET profile page. */
router.get('/profile', checkAuth, profile.get);


router.get('*', function(req, res){
  res.sendHttpError(new HttpError(404, 'Page Not Found'));
});


/**
 * Method: POST
 * */

/* POST login user. */
router.post('/login', login.post);

/* POST items. */
router.post('/products', checkAuth, products.post);

module.exports = router;
