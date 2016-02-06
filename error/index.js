var path = require('path'),
    util = require('util'),
    http = require('http');

/**
 * Http error
 * */

function HttpError(status, message){

    Error.apply(this, arguments);
    Error.captureStackTrace(this, HttpError);

    this.status = status;
    this.message = message || http.STATUS_CODE[status] || 'Error';
}

util.inherits(HttpError, Error);

HttpError.prototype.name = 'HttpError';


/**
 * Auth error
 * */

function AuthError(message){

    Error.apply(this, arguments);
    Error.captureStackTrace(this, AuthError);

    this.message = message || 'Authentication error';
}

util.inherits(AuthError, Error);

AuthError.prototype.name = 'AuthError';



/**
 * Mongo error
 *
 * status
 *  1: "invalid _id"
 *  2: "no such instance"
 *  3: "validation error"
 *  4: "unique error"
 * */

function MongoError(status, message){

    Error.apply(this, arguments);
    Error.captureStackTrace(this, MongoError);

    this.status = status;
    this.message = message || http.STATUS_CODE[status] || 'Error';
}

util.inherits(MongoError, Error);

MongoError.prototype.name = 'MongoError';

exports.HttpError = HttpError;

exports.AuthError = AuthError;

exports.MongoError = MongoError;