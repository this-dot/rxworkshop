import Ember from 'ember';
const { computed: { filterBy } } = Ember;

export default Ember.Component.extend({
    classNames: ['tickets-counter'],
    onlineEvents: filterBy('events', 'location', 'Online'),
    siliconValleyEvents: filterBy('events', 'location', 'Silicon Valley'),
    recordedEvents: filterBy('events', 'location', 'Recorded')
});
