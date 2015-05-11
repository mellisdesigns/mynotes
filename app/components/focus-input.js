import Ember from 'ember';

export default Ember.TextField.extend({
    
    becomeFocused: function(){
        
        setTimeout(this.$().focus(),250); 
        
    }.on('didInsertElement')
});
