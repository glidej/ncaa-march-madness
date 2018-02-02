import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({

  selectedTeam: null,

  left: computed('matchup.[]', {
    get() {
      return this.get('matchup').objectAt(0);
    }
  }),
  right: computed('matchup.[]', {
    get() {
      return this.get('matchup').objectAt(1);
    }
  }),

  actions: {
    pick(team) {
      get(this, 'pick')(team);
    }
  }
});
