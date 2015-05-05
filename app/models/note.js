import DS from 'ember-data';

export default DS.Model.extend({
    
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
            title: 'Title 1',
            body: 'This is comment 1'
        },
        {
            id:2,
            icon: '',
            color: 'blue',
            title: 'Title 2',
            body: 'This is comment 2'
        },
        {
            id:3,
            icon: '',
            color: 'red',
            title: 'Title 3',
            body: 'This is comment 3'
        },
        {
            id:4,
            icon: '',
            color: 'green',
            title: 'Title 4',
            body: 'This is comment 4'
        }
        
    ]
});
