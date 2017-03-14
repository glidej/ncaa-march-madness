import Ember from 'ember';
import TeamColors from 'npm:ncaa-team-colors';

export default Ember.Controller.extend({
  teams: TeamColors,

  mapTeams(chunk) {
    return chunk.map((id) => {
      let team = this.get('teams').findBy('id', id);
      if (!team) {
        return {
          'name': '[undefined]',
          'colors': []
        }
      }

      return team;
    })
  },

  left: Ember.computed('model.rounds.[]', {
    get() {
      // return top half of array
      let conference = [];
      this.get('model.rounds').forEach((_round, index) => {
        if (index === this.get('model.rounds').get('length') - 1) {
          return;
        }
        let chunk = _round.slice(0, _round.length/2);
        conference.push(this.mapTeams(chunk));
      });

      return conference;
    }
  }),

  right: Ember.computed('model.rounds.[]', {
    get() {
      // return bottom half of array
      let conference = [];
      this.get('model.rounds').forEach((_round, index) => {
        if (index === this.get('model.rounds').get('length') - 1) {
          return;
        }
        let chunk = _round.slice(_round.length/2, _round.length);
        conference.push(this.mapTeams(chunk));
      });

      return conference.reverse();
    }
  }),

  winner: Ember.computed('model.rounds.[]', {
    get() {
      return [this.get('model.rounds').objectAt(6).map((id) => {
          let team = this.get('teams').findBy('id', id);
          if (!team) {
            return {
              'name': '[undefined]',
              'colors': []
            }
          }

          return team;
      })]
    }
  }),

  allRounds: Ember.computed('left', 'winner', 'right', {
    get() {
      return Array.prototype.concat(this.get('left'), this.get('winner'), this.get('right'));
    }
  })
});
