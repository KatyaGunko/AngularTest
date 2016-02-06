module.exports = function ( app , express) {

    var path = require('path'),
        config = require('../config'),

        router = require('../routes'),


        bodyParser = require('body-parser'),
        cookieParser = require('cookie-parser'),

        session = require('express-session'),

        MongoStore = require('connect-mongo')(session),
        mongoose = require('../libs/mongoose'),

        errorHandler = require('errorhandler'),
        HttpError = require('../error').HttpError;


    /**
     * Session
     * */
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(session({
        secret: config.get('session:secret'),
        key: config.get('session:key'),
        cookie: config.get('session:cookie'),
        store: new MongoStore({ mongoose_connection: mongoose.connection })
    }));


    /**
     * Add to res method 'sendHttpError'
     * */
    app.use(require('./errorHandler'));


     /**
     * Add to req user object
     * */
    app.use(require('./loadUser'));



    /**
     * Static files directory
     * */
    app.use(express.static(path.join(__dirname, '../public')));


    /**
     * Page Rendering
     * */
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'jade');


    /**
     * Routing
     * */
    app.use('/', router);


    /**
     * Error handling
     * */
    app.use(function(err, req, res, next){
        if ( typeof err == 'number' ){
            err = new HttpError(err);
        }

        if ( err instanceof HttpError ){
            res.sendHttpError(err);
        } else {

            if( app.get('env') == 'development' ){
                errorHandler(err, req, res, next);
            } else {
                err = new HttpError(500);
                res.sendHttpError(err);
            }
        }
    });
};