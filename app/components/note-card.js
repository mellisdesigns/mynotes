import Ember from 'ember';

export default Ember.Component.extend({
    
    isEditingTitle: false,
    isEditingBody:false,
    
    actions: {
        
        editNoteTitle: function(){
            
            this.toggleProperty('isEditingTitle');
            
        },
        titleComplete: function(){
            this.toggleProperty('isEditingTitle');
        },
        editNoteBody: function(){
            this.set('isEditingBody', false);   
        },
        bodyComplete: function(){
            this.set('isEditingBody',false)   
        }
        
    }
    
});
