import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return{
      firstName: 'Muthu',
      lastName: 'Ramasubramanian',
      phoneNumber: '12345678',
      addressLine1: 'Building 123, APT 123',
      addressLine2: 'CityName',
      zipCode: '1234'
    }
  }
});
