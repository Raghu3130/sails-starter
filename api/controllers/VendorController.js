/**
 * VendorController
 *
 * @description :: Server-side logic for managing vendors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var logger = Logger.child({controller: 'VendorController'});
var model='Vendor';

module.exports = {
	createVendor:   function createVendor(req, res) {
		    	
	    var log = logger.child({action: 'createVendor'});
	    var vendor=req.body;
      var data={};
      var address=vendor.address1+' '+vendor.landmark+' '+vendor.address2+' '+vendor.city;
      data.name= vendor.name;
      data.contactPerson= vendor.contactPerson;
      data.Mobile= vendor.mobile;
      data.email= vendor.email;
      data.name= vendor.name;
      data.paymentSchedule= vendor.paymentSchedule;
      data.taxNo= vendor.taxNo;
      data.salesTaxNo= vendor.salesTaxNo;
      data.passowrd= "";
      data.alternativeNumber= vendor.alternativeNumber;
      data.isDeletd=false;
      data.address= address;
	    dbService.add(model,data)
        .then(function (response) {
          log.info(response);
          res.send({ data:response});
        })
        .catch(function (err) {
          log.error('Error at create outlets (insert) Time :  ', err);
         
        });
      },
      getVendor: function getVendor(req,res){
      var log = logger.child({action: 'getVendor'});
       var vendorsParams=req.param('getItem');
       log.info("vendors",vendorsParams);

      dbService.searchVendors(model,vendorsParams)
        .then(function (response) {
          log.info(response);
          res.send({ data:response });
        })
        .catch(function (err) {
          log.error('Error at search outlets (insert) Time :  ', err);
         
        });

    },
      removeVendor: function removeVendor(req,res){
      var log = logger.child({action: 'Remove Vendor'});
       var vendorParams=req.param('getItem');
       

      dbService.removeVendors(model,vendorParams)
        .then(function (response) {
          log.info(response);
          res.send({ data:response });
        })
        .catch(function (err) {
          log.error('Error at delete VendorTime :  ', err);
         
        });

    },

    
	
};

