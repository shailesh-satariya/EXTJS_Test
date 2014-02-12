Ext.define('Itunes.albums.AlbumGrid', {
	extend : 'Ext.grid.Panel',

	requires : ['Ext.data.*', 'Ext.grid.*', 'Ext.toolbar.TextItem', 'Ext.form.field.Text', 'Ext.toolbar.Paging'],

	alias : 'widget.albums-albumgrid',
	cls : 'albums-albumgrid',

	initComponent : function() {
		var me = this;
		this.tbar = ['Search Term', {
			xtype : 'textfield',
			name : 'searchField',
			id : 'searchField',
			value : 'jack johnson',
			hideLabel : true,
			width : 200,
			listeners : {
				change : {
					fn : this.onTextFieldChange,
					scope : this,
					buffer : 100
				}
			}
		}, {
			xtype : 'button',
			text : 'Search',
			tooltip : 'Search',
			handler : this.performSearch,
			scope : this
		}];

		

		Ext.apply(this, {
			title : 'Albums',
			store : this.getStoreConfig("jack+johnson"),
			columns : this.getColumnConfig(),
		});
		
		this.addEvents('albumselected');

		this.callParent();

		this.on('itemclick', this.albumSelectedHandler, this);
	},

	/**
	 * @private
	 * @param {Object} grid
	 * @param {Object} record
	 */
	albumSelectedHandler : function(grid, record) {
		//Ext.getCmp('details').update(record.data);
		this.fireEvent('albumselected', this, record);
	},

	/**
	 *
	 * @param {Object} searchTerm
	 */
	getStoreConfig : function(searchTerm) {
		var store = Ext.create('Ext.data.Store', {
			model : 'Itunes.albums.model.Album',
			
			autoLoad : true,
			proxy : {
				type : 'jsonp',
				url : 'https://itunes.apple.com/search?term=' + searchTerm,
				reader : {
					root : 'results',
					totalProperty : 'resultCount'
				}
			}
		});
		return store;
	},

	getColumnConfig : function() {
		return [{
			header : 'Album Name',
			dataIndex : 'collectionCensoredName',
			flex : 1
		}, {
			header : 'Artist Name',
			dataIndex : 'artistName',
			width : 150
		}];
	},

	performSearch : function() {
		var me = this, value = Ext.getCmp('searchField').getValue();
		value = value.trim();
		value = value.replace(/\s/g, "+");
		this.reconfigure(this.getStoreConfig(value), this.getColumnConfig());

	},
});
