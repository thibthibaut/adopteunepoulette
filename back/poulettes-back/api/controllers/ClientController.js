/**
 * ClientController
 *
 * @description :: Server-side logic for managing clients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	addOneTobalance: function(req, res){

		var id = req.param('id');
		if(!id)
			res.badRequest('Please enter id');

		Client.findOne(id)
			.then(c => {
					var b = c.balance;
					b++;
					
					
			return Client.update({id:id}, {balance:b})

			})
			.then(updatedRecord => {
				res.ok();
			});
		



	},
	
};

