/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
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
  getdata: function getdata(req, res) {
    if (req.session.user) {
      res.status(200);
      res.send(req.session.user);
    }
  }
};
