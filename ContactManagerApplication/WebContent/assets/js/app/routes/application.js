
App.ApplicationRoute = Em.Route.extend({
    actions: {
        showModal: function(fname){
            this.controllerFor(fname).set('modalVisible', true);
        },
        goBack: function(){
            this.transitionTo('contacts');
        }
    }
});