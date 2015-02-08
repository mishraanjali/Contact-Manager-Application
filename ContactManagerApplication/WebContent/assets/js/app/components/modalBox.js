App.ModalBoxComponent = Em.Component.extend({
	
    isModalVisible: false,
    actions: {
        hideModal: function(){
            this.set('isModalVisible', false);
        }
    }
});
