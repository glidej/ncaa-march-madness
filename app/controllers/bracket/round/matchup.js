import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    pick(team) {
      this.send('pickTeam', team);
    }
  }
});
