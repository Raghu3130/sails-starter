/**
 * LogoutController
 *
 * @description :: Server-side logic for managing logouts
 *  See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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
  logout: function logout(req, res) {
    req.session.user = null;
    if (!req.session.user) {
      res.status(200);
      res.send(200 + 'logout successfull');
    }
  }
};

