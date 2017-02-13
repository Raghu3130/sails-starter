/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * See http://sailsjs.org/#!/documentation/concepts/Controllers
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
  session: function session(req, res) {
    if (req.session.user) {
      res.status(200);
      res.send(200 + req.session.user);

    }else {
      res.status(401);
      res.send(401 + 'failed');

    }
  }
};

