/**
 * LogoutController
 *
 * @description :: Server-side logic for managing logouts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	logout : function logout(req,res){
				console.log("logout");
				req.session.user = null;
				if(!req.session.user){
					res.status(200);
					res.send(200+"logout successfull");
				}
	}
};

