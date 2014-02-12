Ext.define('Itunes.albums.Viewport', {
	extend : 'Ext.container.Viewport',

	alias : 'widget.albums-viewport',
	cls : 'albums-viewport',

	initComponent : function() {
		Ext.apply(this, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			defaults:  {
				flex: 1 
			},
			items : [
			{
				xtype : 'albums-albumgrid',
				listeners : {
					'albumselected' : this.albumSelectedHandler,
					scope : this
				}
			}, {
				xtype : 'albums-albumview',
				id : 'details'
			}]
		});

		this.callParent();
	},

	albumSelectedHandler : function(grid, record) {
		Ext.getCmp('details').update(record.data);
	}
})
