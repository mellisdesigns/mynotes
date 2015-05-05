import DS from 'ember-data';

/*
    Here we are createing a model object for our product
    We will also populate it with some existing data for
    testing purposes.
*/
export default DS.Model.extend({
    
    name: DS.attr('string'),
    description: DS.attr('string'),
    notes: DS.hasMany('note',{async:true}),
    isSelected: DS.attr('boolean', {defaultValue:false}),
    totalnotes: function() {
        return this.get('notes.length')
    }.property('notes')
  
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'Cake Mix',
            description: '500 Grams of Cake Mix.',
            isSelected: false,
            notes: [1,2]
        },
        {
            id: 2,
            name: 'Industrial Mixer',
            description: 'An industrial mixer user for the food kitchen.',
            isSelected: false,
            notes: [3,4]
        }
    ]
});
