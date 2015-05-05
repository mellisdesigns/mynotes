import DS from 'ember-data';

/*
    Here we are createing a model object for our product
    We will also populate it with some existing data for
    testing purposes.
*/
export default DS.Model.extend({
    
    name: DS.attr('string'),
    description: DS.attr('string'),
    notes: DS.hasMany('note',{async:true})
  
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'Light Bulb',
            description: 'A pretty awesome light from some place',
            note_ids: [1,2]
        },
        {
            id: 2,
            name: 'Awesome Sauce',
            description: 'A spicy sauce used on everything',
            note_ids: [3,4]
        }
    ]
});
