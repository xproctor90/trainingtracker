var db = require('../../models');

module.exports = function (app, passport) {

  // new user signup:
  app.post('/', 
    passport.authenticate('local-signup', {
      successRedirect: '/UserHome',
      failureRedirect: '/signup'
    }));

  // returning user signin:
  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/UserHome',
    failureRedirect: '/signin'
  }
  ));

  app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
      res.redirect('/');
    })
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  }
}