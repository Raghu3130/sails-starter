/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
		  session : function session(req,res){
		  			console.log("sesioncontroller called");
		  			if(req.session.user){
		  				console.log("in session");
		  				res.status(200);
		  				res.send(200+req.session.user);
		  				
		  				
		  			}else{
		  				console.log("out session");
		  					res.status(401);
		  					res.send(401+"failed");
		  				
		  			}
		  }
};

