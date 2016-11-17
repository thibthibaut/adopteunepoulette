/**
 * Client.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
		firstname: { 
			type: 'string',
			required: true,
		},
		balance:{
			type: 'integer'
		}
  },


	beforeCreate:function(values, cb) {
		values.balance = 5;
		cb();
	},

  afterCreate: function(values, cb) {
		sails.log.info('New user created:' + values.firstname);
		cb();
	}

	
};

