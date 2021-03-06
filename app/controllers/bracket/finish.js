import Controller from '@ember/controller';
import { computed } from '@ember/object';
import TeamColors from 'ncaa-team-colors';

export default Controller.extend({
  teams: TeamColors,

  mapTeams(chunk) {
    return chunk.map((id) => {
      let team = this.teams.findBy('id', id);
      if (!team) {
        return {
          'name': '[undefined]',
          'colors': []
        }
      }

      return team;
    });
  },

  left: computed('model.rounds.[]', {
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

  right: computed('model.rounds.[]', {
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

  winner: computed('model.rounds.[]', {
    get() {
      return [this.get('model.rounds').objectAt(6).map((id) => {
          let team = this.teams.findBy('id', id);
          if (!team) {
            return {
              'name': '[undefined]',
              'colors': []
            }
          }

          return team;
      })];
    }
  }),

  allRounds: computed('left', 'winner', 'right', {
    get() {
      return Array.prototype.concat(this.left, this.winner, this.right);
    }
  })
});
