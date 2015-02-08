
App.ContactCreateAndEditRoute = Ember.Route.extend({

    activate: function(){
        this.controllerFor('contact').setProperties({
            'editMode': true,
            'deleteMode': false
        });
    },
    
    deactivate: function(){
        this.controllerFor('contact').setProperties({
            'editMode': false,
            'deleteMode': false
        });
    }
});