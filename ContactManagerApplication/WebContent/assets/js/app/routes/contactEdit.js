
App.ContactEditRoute = App.ContactCreateAndEditRoute.extend({
	
    model: function() {
        return this.modelFor('contact');
    },
    actions: {
        goBack: function(){
            this.transitionTo('contact');
        }
    }
});