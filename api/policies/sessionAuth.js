/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 `req.session.authenticated = true;`
 *
 */
/**
  * { function_description }
  *
  * @public
  *
  * @memberof   (parent_name_path)
  *
  * @author     manoj
  *
  * @param      {req}    req     The request
  * @param      {res}    res     The resource
  * @param      {Function}  next    The next
  * @return     {return}    { description_of_the_return_value }
  */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.authenticated) {
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You are not permitted to perform this action.');
};
