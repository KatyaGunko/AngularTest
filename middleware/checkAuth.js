var HttpError = require('../error').HttpError;

module.exports = function(req, res, next) {

    if(!req.session.user) {
        res.status(401).redirect('login');

        //return next( new HttpError(401, 'You are not authorized '));
    } else {
        next();
    }
};