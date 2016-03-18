import Ember from 'ember';

export default Ember.Component.extend({

  selectedTeam: null,

  left: Ember.computed('matchup.[]', {
    get() {
      return this.get('matchup').objectAt(0);
    }
  }),
  right: Ember.computed('matchup.[]', {
    get() {
      return this.get('matchup').objectAt(1);
    }
  }),

  actions: {
    pick(team) {
      this.sendAction('pick', team);
    }
  }
});
