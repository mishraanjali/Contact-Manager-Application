App.ContactsController = Em.ArrayController.extend({
	
    sortProperties: ['fname'],
    sortAscending: true, 
    
    contactsCount: function(){
        return this.get('model.length');
    }.property('@each')
});