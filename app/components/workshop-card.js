import Ember from 'ember';
import moment from 'moment';
const { computed: { equal } } = Ember;

export default Ember.Component.extend({
  classNames: ['workshop-card'],
  isRecorded: equal('model.location', 'Recorded')
});
