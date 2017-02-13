/**
 * AuthuserController
 * @description :: Server-side logic for managing authusers
 *  See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/* jshint undef: true, unused: true */
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
  auth: function auth(req, res) {
    var user = req.body.username;
    var password =  req.body.password;
    User.find({username: user}).then(function(result) {
      if (result[0].password === password) {
        req.session.user = result[0];
        req.session.user.islogin = true ;
        res.status(200);
        res.send(200 + ' user found');
      } else {
        res.status(200);
        res.send(200 + ' user not found');
      }
    }).catch(function(error) {
      res.send('you have to register first' + error);
    });
  }
};
