import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { htmlSafe } from "@ember/string"

export default Component.extend({
  selectedTeam: null,
  sanitize(team) {
    return Object.assign({}, team, {
      colors: (team.colors || []).map((color) => {
        return htmlSafe(`background-color: ${color}`);
      })
    });
  },

  left: computed('matchup.[]', {
    get() {
      return this.sanitize(this.get('matchup').objectAt(0));
    }
  }),
  right: computed('matchup.[]', {
    get() {
      return this.sanitize(this.get('matchup').objectAt(1));
    }
  }),

  actions: {
    pick(team) {
      get(this, 'pick')(team);
    }
  }
});
