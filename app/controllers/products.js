import Ember from 'ember';

export default Ember.ArrayController.extend({
    
    //Here we can set some rudimentary values for this particular template.
    initProductGlobals: function(){

        //Disable the comments input until at least one item is selected
        this.set('disableCommentForm',true);

    }.on('init'),
    
    actions: {
        
        editTodo: function(todoInput){
            
            console.log("HERE")
            
        },
        
        selectProduct: function(productSelected){
            
            //Clear all selected products
            this.send('deselectAllProducts');
            
            //Select current product
            productSelected.set('isSelected',true);
            
            //Set controller object to selected product
            this.set('selectedProduct',productSelected);
            
            //Set variable to allow
            this.set('disableCommentForm',false);
            
            
        },
        createProduct: function(newProduct) {

            //We need to create a new product record
            var newproduct = this.store.createRecord('product', {
                name:newProduct,
                description:'',
                isSelected:true
            })
            
            //Remove the text inside the product label
            this.set('newProduct','');
            
            //Save the record
            newproduct.save();
            
            //Set as selected product
            this.send('selectProduct',newproduct);
        },
        deselectAllProducts: function() {
            
            //Query all products with isSelected == true
            //This may not be the best method for mass attribute change
            this.filter(function(product){
                product.set('isSelected',false);
            })
        },
        
        createNote: function(newNote){

            var newnote = this.store.createRecord('note', {
                product:this.get('selectedProduct'),
                icon:'',
                title:'My New Title',
                color:'green',
                body:newNote
            })
            
            //Save note
            newnote.save();

            //Remove the text inside the note form to nothing
            this.set('newNote','');
            
           
        }
        
    }
    
})
