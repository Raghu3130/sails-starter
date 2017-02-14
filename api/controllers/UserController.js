/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 */
/* globals User */
/* globals Logger */
var logger = Logger.child({controller: 'UserController'});
module.exports = {
  /**
   * to create new user in database(register)
   *
   * @public
   *
   * @memberof   UserController.js
   *
   * @author     manoj
   *
   * @param      {object}  req     The request
   * @param      {object}  res     The resource
   */
  createUser:   function createUser(req, res) {
    var log = logger.child({action: 'createUser'});
    var user = req.body.username;
    var password = req.body.password;
    User.create({username: user, password: password}).exec(function(err) {
      if (err) {
        log.error('error at user create(insert) time', err);
        res.send({error: err});
      }else {
        log.info('User created successfully');
        res.send({code: 'SUCCESS'});
      }
    });
  },
  /**
     *  check user credential to  login
     *
     * @public
     *
     * @memberof   UserController.js
     *
     * @author     manoj
     *
     * @param      {object}  req     The request
     * @param      {object}  res     The resource
     */
  login: function login(req, res) {
    var log = Logger.child({action: 'login'});
    var user = req.body.username;
    var password =  req.body.password;
    User.find({username: user}).then(function(result) {
      if (result.length !== 0) {
        if (result[0].password === password) {
          req.session.user = result[0];
          req.session.isLoggedIn = true ;
          log.info('SUCCESS');
          res.status(200);
          res.send({code: 'SUCCESS'});
        } else {
          log.info('Failed to find User');
          res.send({code: 'FAILED'});
        }
      } else {
        log.info('result array empty');
        res.send({code: 'FAILED'});
      }
    }).catch(function() {
      log.error('User not exist');
      res.send({error: 'NOTFOUND'});
    });
  },
  /**
   * set logout
   *
   * @public
   *
   * @memberof   UserController.js
   *
   * @author     manoj
   *
   * @param      {object}  req     The request
   * @param      {object}  res     The resource
   */
  logout: function logout(req, res) {
      var log = Logger.child({action: 'logout'});
      req.session.user = null;
      req.session.isLoggedIn = false ;
      log.info('Logout Successfully');
      res.status(200);
      res.send({code: 'LOGGED_OUT'});
    },
  /**
   * check  session and send user information
   *
   * @public
   *
   * @memberof   UserController.js
   *
   * @author     manoj
   *
   * @param      {object}  req     The request
   * @param      {object}  res     The resource
   */
  session: function session(req, res) {
    var log = Logger.child({action: 'session'});
    if (req.session.user) {
      log.info('session set');
      res.status(200);
      res.send({code: 'AUTHORIZED',data: req.session.user});
    }else {
      res.status(401);
      log.info('session not set');
      res.send({code: 'UNAUTHORIZED'});
    }
  },
};
