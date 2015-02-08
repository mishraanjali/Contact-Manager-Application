App.ContactsCreateController = Ember.ObjectController.extend({
	
    needs: ['contact'],

    actions: {
        save: function () {
            var newContact = this.store.createRecord('contact', this.get('model'));
            newContact.save();
            this.transitionToRoute('contact', newContact);
        }
    }
});
