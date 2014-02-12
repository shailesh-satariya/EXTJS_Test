Ext.define('Company.dogs.Viewport', {
	extend : 'Ext.container.Viewport',

	alias : 'widget.dogs-viewport',
	cls : 'dogs-viewport',

	initComponent : function() {
		Ext.apply(this, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			defaults:  {
				flex : 1
			},
			items : [{
				xtype : 'dogs-doggrid',
				listeners : {
					'dogselected' : this.dogSelectedHandler,
					scope : this
				}
			}, {
				xtype : 'dogs-dogview',
				id : 'details'
			}]
		});

		this.callParent();
	},

	dogSelectedHandler : function(grid, record) {
		Ext.getCmp('details').update(record.data);
	}
})
