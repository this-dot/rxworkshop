import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  date: attr('date'),
  price: attr('number'),
  location: attr(),
  link: attr()
});
