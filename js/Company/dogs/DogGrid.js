Ext.define('Company.dogs.DogGrid', {
	extend : 'Ext.grid.Panel',

	alias : 'widget.dogs-doggrid',
	cls : 'dogs-doggrid',

	initComponent : function() {
		Ext.apply(this, {
			title : 'Lots of Dogs',
			store : this.getStoreConfig(),
			columns : this.getColumnConfig()
		});
		
		this.addEvents('dogselected');
		
		this.callParent();

		this.on('itemclick', this.dogsSelectedHandler, this);
	},

	/**
	 * @private
	 * @param {Object} grid
	 * @param {Object} record
	 */
	dogsSelectedHandler : function(grid, record) {
		//Ext.getCmp('details').update(record.data);
		this.fireEvent('dogselected', this, record);
	},

	getStoreConfig : function() {
		return {
			model : 'Company.dogs.model.Dog',
			autoLoad : true,
			proxy : {
				type : 'ajax',
				url : 'data/dogs.json',
				reader : {
					type : 'json',
					root : 'dogs'
				}
			}
		};
	},

	getColumnConfig : function() {
		return [{
			header : 'Name',
			dataIndex : 'name',
			flex : 1
		}, {
			header : 'Breed',
			dataIndex : 'type',
			width : 150
		}];
	}
});
