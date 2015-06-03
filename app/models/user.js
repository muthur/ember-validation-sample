import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  addressLine1: DS.attr('string'),
  addressLine2: DS.attr('string'),
  zipCode: DS.attr('string')
});
