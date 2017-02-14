/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 */
/* globals User */
module.exports = {
  /**
   * { function_description }
   *
   * @public
   *
   * @memberof   (parent_name_path)
   *
   * @author     manoj
   *
   * @param      {object}  req     The request
   * @param      {object}  res     The resource
   */
  createuser:	function createuser(req, res) {

    var user = req.body.username;
    var password = req.body.password;
    User.create({username: user,password: password}).exec(function(err) {
      if (err) {
        res.send({error: err});
      }else {
        res.send({Code: 'SUCCESS'});
      }
    });

  },
  /**
     * { function_description }
     *
     * @public
     *
     * @memberof   (parent_name_path)
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
      if (result[0].password === password) {
        req.session.user = result[0];
        req.session.user.islogin = true ;
        res.status(200);
        res.send({Code: 'SUCCESS'});
      } else {
        res.status(200);
        res.send({Code: 'FAILED'});
      }
    }).catch(function(error) {
      res.send({error: error});
    });
  },
  /**
   * { function_description }
   *
   * @public
   *
   * @memberof   (parent_name_path)
   *
   * @author     manoj
   *
   * @param      {object}  req     The request
   * @param      {object}  res     The resource
   */
  logout: function logout(req, res) {
    req.session.user = null;
    if (!req.session.user) {
      res.status(200);
      res.send({code: 'LOGGED_OUT'});
    }
  },
  /**
   * { function_description }
   *
   * @public
   *
   * @memberof   (parent_name_path)
   *
   * @author     manoj
   *
   * @param      {object}  req     The request
   * @param      {object}  res     The resource
   */
  session: function session(req, res) {
    if (req.session.user) {
      res.status(200);
      res.send({Code: 'AUTHORIZED'});

    }else {
      res.status(401);
      res.send({Code: 'UNAUTHORIZED'});

    }
  },
  /**
   * { function_description }
   *
   * @public
   *
   * @memberof   (parent_name_path)
   *
   * @author     manoj
   *
   * @param      {object}  req     The request
   * @param      {object}  res     The resource
   */
  getUser: function getUser(req, res) {
    if (req.session.user) {
      res.status(200);
      res.send(req.session.user);
    } else {
      res.send({Code: 'UNAUTHORIZED'});
    }
  }
};
