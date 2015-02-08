
App.Router.map(function(){
	
    this.resource('contacts', function(){
        
        this.resource('contact', { path:'/:contact_id' }, function(){
            this.route('edit');
        });
        this.route('create');
    });

    this.route('missing', { path: '/*path' });
});

App.MissingRoute = Em.Route.extend({
	
    redirect: function(){
        this.transitionTo('contacts.index');
    }

});