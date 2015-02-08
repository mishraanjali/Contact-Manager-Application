
App.ContactsCreateRoute = App.ContactCreateAndEditRoute.extend({
	
    model: function(){
        return Em.Object.create({});
    },
    
    renderTemplate: function(){
        this.render('contact.edit', {
            controller: 'contactsCreate'
        });
    }
    
});