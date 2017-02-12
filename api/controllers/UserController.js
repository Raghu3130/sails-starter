/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
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
 * @class      User (name)
 * @param      {User}  options  The options
 */
module.exports = {

	getdata : function getdata(req,res){
				if(req.session.user){
		  				console.log("in session");
		  				res.status(200);
		  				res.send(req.session.user);
		  			}
	}
}