App.ContactController = Ember.ObjectController.extend({
    editMode: false,

    deleteMode: false,

    actions: {
        delete: function(){
            this.toggleProperty('deleteMode');
        },
        cancelDelete: function(){
            this.set('deleteMode', false);
        },
        confirmDelete: function(){
            this.get('model').deleteRecord();
            this.get('model').save();
            this.transitionToRoute('contacts');
            this.set('deleteMode', false);
        }
    },
    edit: function(){
        this.setProperties({
            'editMode': true,
            'deleteMode': false
        });
        this.transitionToRoute('contact.edit');
    }
});
