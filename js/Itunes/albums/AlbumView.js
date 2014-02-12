Ext.define('Itunes.albums.AlbumView', {
	extend : 'Ext.panel.Panel',

	alias : 'widget.albums-albumview',
	cls : 'albums-albumview',
	
	initComponent : function() {
		Ext.apply(this, {
			title: 'Selected Album',
			bodyPadding: 10,
			tpl : '<div>Album Name: {collectionCensoredName}</div>' +
			'<div>Artist Name: {artistName}</div>' +
			'<div><img src="{artworkUrl100}" /></div>' , 
		});
		
		this.callParent();
	}

});