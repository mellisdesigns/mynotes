import Ember from 'ember';

export default Ember.ArrayController.extend({
    
    actions: {

        selectProduct: function(productSelected){
            
            //Clear all selected products
            this.send('deselectAllProducts');
            
            //Select current product
            productSelected.set('isSelected',true);
            
            //Set controller object to selected product
            this.set('selectedProduct',productSelected);
            
            
        },
        createProduct: function(newProduct) {

            //We need to create a new product record
            var newproduct = this.store.createRecord('product', {
                name:newProduct,
                description:'',
                isSelected:true,
            })
            
            //Remove the text inside the product label
            this.set('newProduct','');
            
            //Save the record
            newproduct.save();
            
            //Visually set the product and load notes
            this.send('selectProduct',newproduct);
        },
        deselectAllProducts: function() {
            
            //Query all products with isSelected == true
            //This may not be the best method for mass attribute change
            //Could also potentially save the post that is selected
            
            this.filter(function(product){
                product.set('isSelected',false)
            })
        }
        
    }
    
});
