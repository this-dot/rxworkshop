import Ember from 'ember';
import fixtures from '../fixtures';

export default Ember.Route.extend({
  beforeModel() {
    this.store.pushPayload(fixtures);
  }
});
