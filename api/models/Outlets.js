/**
 * Outlets.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	type:{
  		type:'string'
  	},
  	outletName: {
  		type: 'string'
  	},
  	address: {
  		type: 'string'
  	},
	  cityId: {
	  	model:'city'
	  },
	  openTime: {
	  	type:'string'	
	  },
	  closeTime: {
	  	type:'string'
		},
	  remark: {
	  	type:'string'
	  },
	  preparationTime:{
	  	type:'string'
	  },
	  minOrder:{
	  	type:'string'
	  },
	  shortDesc:{
	  	type:'string'
	  },
	  longDesc:{
	  	type:'string'
	  },
	  isOpen:{
	  	type:'string'
	  },
	  categories:{
	  	type:'string'
	  },
	
    vendorId:{
    	model:'vendor'

    },
    isDeleted:{
    	type:'boolean'
    }

  }
};


