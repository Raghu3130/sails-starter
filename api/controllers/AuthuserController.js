/**
 * AuthuserController
 *
 * @description :: Server-side logic for managing authusers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	auth : function auth(req,res){
			
					console.log("this is auth "+req.body);
					var user = req.body.username;
				
					var password =  req.body.password;
					console.log(user+"user name"+password);
					Create.find({username:user}).then(function(result){
					
						if(result[0].password===password){

							req.session.user = result[0];
							req.session.user.islogin = true ;
						
							//res.send(JSON.stringify(req.session.user));
							res.status(200);
							res.send(200+" user found");
						}
						else{
							res.status(200);
							res.send(200+" user not found");
						}
						
						
						
					}).catch(function(error){
						console.log("not found"+error);
							res.send("you have to register first");
					});
				}
			
			
	
};

