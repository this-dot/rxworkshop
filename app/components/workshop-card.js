import Ember from 'ember';
const { computed: { equal } } = Ember;

export default Ember.Component.extend({
  classNames: ['workshop-card'],
  isRecorded: equal('model.location', 'Recorded')
});
