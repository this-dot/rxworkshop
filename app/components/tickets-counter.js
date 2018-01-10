import Ember from 'ember';
const { computed, isArray } = Ember;

export default Ember.Component.extend({
    classNames: ['tickets-counter'],

    getEvents(toMatch) {
      return this.get('events').filter(event => {
        const location = event.get('location');
        return isArray(location) ? location.includes(toMatch) : location === toMatch;
      })
    },

    onlineEvents: computed('events', function() {
      return this.getEvents('Online');
    }),

    siliconValleyEvents: computed('events', function() {
      return this.getEvents('Silicon Valley');
    }),

    recordedEvents: computed('events', function() {
      return this.getEvents('Recorded');
    })
});
