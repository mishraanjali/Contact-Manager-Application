
App.ConfirmBoxComponent = Ember.Component.extend({

    isVisible: false,
    actions: {
    	
      cancelDelete: function(){
        this.toggleProperty('isVisible');
      },

      confirmDelete: function(){
        var $thisParent = this.$().parents('.contact-profile');
        $thisParent.removeAttr('style').addClass('delete-animation');
        Ember.run.later(this, function() {
            this.sendAction('action', this.get('param'));
        }, 900);
      }
    }
});