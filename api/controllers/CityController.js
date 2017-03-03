/**
 * CityController
 *
 * @description :: Server-side logic for managing cities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 * 
 */

 var logger = Logger.child({controller: 'CityController'});
 var model = 'City';


module.exports = {
	/**
	 * Creates a city.
	 *
	 * @public
	 *
	 * @memberof   CityController.js
	 *
	 * @author     Raghu Mudaliar
	 *
	 * @param      {object}  req     The request
	 * @param      {object}  res     The resource
	 */
	createCity:   function createCity(req, res) {
		
	    var log = logger.child({action: 'createCity'});
	    var cityParams=req.body;
	    dbService.add(model,cityParams)
        .then(function (response) {
          log.info(response);
          res.send({ code: 'CREATE_CITY_SUCCESS1' });
        })
        .catch(function (err) {
          log.error('Error at create city (insert) Time :  ', err);
         
        });
   
	
	},
	/**
	 * Gets the city.
	 *
	 * @public
	 *
	 * @memberof   CityController.js
	 *
	 * @author     Raghu Mudaliar
	 *
	 * @param      {object}  req     The request
	 * @param      {object}  res     The resource
	 */
	getCity: function getCity(req,res){

				var log = logger.child({action: 'getCity'});
				 var getItem=req.param('getItem');
				 console.log(getItem);
				dbService.search(model,getItem)
	        .then(function (response) {
	          log.info(response,"response is ");
	          res.send({ data:response });
	        })
	        .catch(function (err) {
	          log.error('Error at search city (insert) Time :  ', err);
	         
	        });

			}

}; 