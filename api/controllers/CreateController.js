/**
 * CreateController
 *
 * @description :: Server-side logic for managing creates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	 createuser :	function createuser(req,res){
	 				
		 				console.log("create in");
		 				var user = req.body.username;
		 				var password = req.body.password;
		 				console.log(user+" "+password);
					 	Create.create({username:user,password:password}).exec(function(err){
							if(err){
								console.log(err);
							}else{
								res.send({user:"user created sucessfull"});
							}
						});
				  

	 }
};

