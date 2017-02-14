/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 */
/* globals User */
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
    var user = req.body.username;
    var password = req.body.password;
    User.create({username: user, password: password}).exec(function(err) {
      if (err) {
        res.send({error: err});
      }else {
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
    var user = req.body.username;
    var password =  req.body.password;
    User.find({username: user}).then(function(result) {
      if (result.length !== 0) {
        if (result[0].password === password) {
          req.session.user = result[0];
          req.session.isLoggedIn = true ;
          res.status(200);
          res.send({code: 'SUCCESS'});
        } else {
          res.send({code: 'FAILED'});
        }
      } else {
        res.send({code: 'FAILED'});
      }
    }).catch(function(error) {
      res.send({error: error});
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
      req.session.user = null;
      req.session.isLoggedIn = false ;
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
    if (req.session.user) {
      res.status(200);
      res.send({code: 'AUTHORIZED',data: req.session.user});
    }else {
      res.status(401);
      res.send({code: 'UNAUTHORIZED'});
    }
  }
};
