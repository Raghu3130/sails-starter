/**
 * OutletsController
 *
 * @description :: Server-side logic for managing outlets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var logger = Logger.child({controller: 'OutletsController'});
 var model= 'Outlets';

	module.exports = {
		/**
		 * Creates an outlet in the database.
		 *
		 * @public
		 *
		 * @memberof   OutletsController.js
		 *
		 * @author     Raghu Mudaliar
		 *
		 * @param      {object}  req     The request
		 * @param      {object}  res     The resource
		 */
		createOutlet:   function createOutlet(req, res) {
		    	
	    var log = logger.child({action: 'createOutlet'});
	    var item=req.body;
	    var outlet = {};

       outlet.outletName = item.name;
       outlet.type = item.type;
       outlet.cityId = item.selectedItem.id;
       var address = item.address1 + ' '+item.landmark + ' '+item.address2;
       outlet.address = address;
       outlet.openTime = item.openTime;
       outlet.closeTime = item.closeTime;
       outlet.preparationTime = item.prepareTime;
       outlet.remark = item.remark;
       outlet.vendorId = item.vendorName.id;
       outlet.minOrder = item.minOrder;
       outlet.isDeleted=false;
       outlet.categories=item.categories;
       outlet.shortDesc=item.shortDesc;
 	   outlet.longDesc=item.longDesc;


	    dbService.add(model,outlet)
        .then(function (response) {
          log.info(response);
          res.send({ data:response});
        })
        .catch(function (err) {
          log.error('Error at create outlets (insert) Time :  ', err);
         
        });
      },
       upload:function upload(req,res){
       	req.file('file').upload({
      dirname: require('path').resolve(sails.config.appPath, 'assets/images')
    },function (err, uploadedFiles) {
      if (err) return res.negotiate(err);

      return res.json({
        message: uploadedFiles.length + ' file(s) uploaded successfully!'
      });
    });
       },
   
		  /**
		   * Gets the outlet from the database.
		   *
		   * @public
		   *
		   * @memberof   OutletsController.js
		   *
		   * @author     Raghu Mudaliar
		   *
		   * @param      {object}  req     The request
		   * @param      {object}  res     The resource
		   */
		getOutlet: function getOutlet(req,res){
			var log = logger.child({action: 'getOutlet'});
			 var outletsParams=req.param('getItem');
			 

			dbService.searchOutlets(model,outletsParams)
        .then(function (response) {
          log.info(response);
          res.send({ data:response });
        })
        .catch(function (err) {
          log.error('Error at search outlets (insert) Time :  ', err);
         
        });

		},
		removeOutlet: function removeOutlet(req,res){
			var log = logger.child({action: 'getOutlet'});
			 var outletsParams=req.param('getItem');
			 

			dbService.removeOutlets(model,outletsParams)
        .then(function (response) {
          log.info(response);
          res.send({ data:response });
        })
        .catch(function (err) {
          log.error('Error at delete outlets Time :  ', err);
         
        });

		},
        updateOutlet:   function updateOutlet(req, res) {
          
      var log = logger.child({action: 'createOutlet'});
      var item=req.body;
      var outlet = {};
        outlet.id=item.id;
       outlet.outletName = item.name;
       outlet.type = item.type;
       outlet.cityId = item.selectedItem.id;
       var address = item.address1 + ' '+item.landmark + ' '+item.address2;
       outlet.address = address;
       outlet.openTime = item.openTime;
       outlet.closeTime = item.closeTime;
       outlet.preparationTime = item.prepareTime;
       outlet.remark = item.remark;
       outlet.vendorId = item.vendorName.id;
       outlet.minOrder = item.minOrder;
       outlet.isDeleted=false;
       outlet.categories=item.categories;
       outlet.shortDesc=item.shortDesc;
      outlet.longDesc=item.longDesc;

      log.info("***********///////",outlet);
      dbService.update(model,outlet)
        .then(function (response) {
          log.info(response);
          res.send({ data:response});
        })
        .catch(function (err) {
          log.error('Error at create outlets (insert) Time :  ', err);
         
        });
      },

		
};
