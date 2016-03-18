import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.modelFor('bracket').get('rounds').objectAt(params.round);
  },

  actions: {
    pickTeam(team) {
      return true;
    }
  }
});
