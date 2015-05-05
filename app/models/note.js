import DS from 'ember-data';

/*
    Here we are createing a model object for our note
    We will also populate it with some existing data for
    testing purposes.
*/

export default DS.Model.extend({
    
    product: DS.belongsTo('product'),
    icon: DS.attr('string'),
    color: DS.attr('string'),
    title: DS.attr('string'),
    body: DS.attr('string')
  
}).reopenClass({
    FIXTURES: [
        {
            id:1,
            icon: '',
            color: 'red',
            title: 'important',
            body: 'The product needs to be handeled carfully due to a slippery outer case.'
        },
        {
            id:2,
            icon: '',
            color: 'blue',
            title: 'communication',
            body: 'The distributer is incredibly friendly, he likes lemon cake.'
        },
        {
            id:3,
            icon: '',
            color: 'red',
            title: 'heavy',
            body: 'This product weighs a ton. We struggled to get it through the door so some extra planning is required when moving the product'
        },
        {
            id:4,
            icon: '',
            color: 'blue',
            title: 'communication',
            body: 'If you ever go for coffee with this guy, make sure you really get it strong. He really likes his coffee!'
        }
        
    ]
});
