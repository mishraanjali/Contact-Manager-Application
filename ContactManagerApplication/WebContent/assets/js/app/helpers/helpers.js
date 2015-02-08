Ember.Handlebars.helper('formatDate', function(date){
    return date ? moment(date).fromNow() : '';
});

