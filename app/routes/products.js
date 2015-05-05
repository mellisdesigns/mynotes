import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('product');
    },
    renderTemplate: function() {
        this.render({outlet: 'productlist'})   
    }
});
