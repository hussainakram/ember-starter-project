import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  body: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')
});
