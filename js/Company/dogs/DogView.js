Ext.define('Company.dogs.DogView', {
	extend : 'Ext.panel.Panel',

	alias : 'widget.dogs-dogview',
	cls : 'dogs-dogview',
	
	initComponent : function() {
		Ext.apply(this, {
			title: 'selected Dog',
			bodyPadding: 10,
			tpl : '<div>Name: {name}</div>' +
			'<div>Breed: {type}</div>' +
			'<div>Age: {age}</div>' +
			'<div><img src="{imgUrl}" /></div>' , 
		});
		
		this.callParent();
	}

});