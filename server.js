var express = require('express'),

    /**
     * Module for creating http server
     * */
    http = require('http'),

    /**
     * Creating app
     * */
    app = express(),

    /**
     * Middleware
     * */
    middleware = require('./middleware')(app, express),

    /**
     * Config module with posts, session configuration, mongo configuration
     * */
    config = require('./config'),

    /**
     * Module for parsing path
     * */
    path = require('path'),


    /**
     * Routes module
     * */
    routes = require('./routes/index');

//log = require('./utils/log')(app, module);

/**
 * Creating http server for app
 * */
http.createServer(app).listen(config.get('port'), function(){
  console.log('Express server listening on port ' + config.get('port'));
});

var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//

//var users = require('./routes/users');


// view engine setup

//
//// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//
//app.use('/', routes);
//app.use('/users', users);
//
//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});
//
//// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});
//
//
//module.exports = app;
