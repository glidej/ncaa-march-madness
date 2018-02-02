import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.modelFor('bracket').get('rounds').objectAt(params.round);
  },

  actions: {
    pickTeam() {
      return true;
    }
  }
});
