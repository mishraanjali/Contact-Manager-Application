App.ContactRoute = Ember.Route.extend({
	
    model: function(params) { 
        return this.store.find('contact', params.contact_id);
    },

    actions: {
        goBack: function(){
            this.transitionTo('contacts');
        }
    }
});
