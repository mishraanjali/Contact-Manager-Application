App.ContactEditController = Ember.ObjectController.extend({
	
    needs: ['contact'], 
    
    actions: {
    	
        save: function(){
            var contact = this.get('model');
            contact.save();
            this.transitionToRoute('contact', contact);
        }
    }
});