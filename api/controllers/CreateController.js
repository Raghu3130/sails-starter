/**
 * { to create user in database }
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
  createuser:	function createuser(req, res) {

    var user = req.body.username;
    var password = req.body.password;
    User.create({username: user,password: password}).exec(function(err) {
      if (err) {
        res.send(err);
      }else {
        res.send({user: 'user created sucessfull'});
      }
    });

  }
};

