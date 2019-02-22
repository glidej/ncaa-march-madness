import TeamColors from 'npm:ncaa-team-colors';
import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import Object from '@ember/object';

export default Route.extend({
  firstRound: inject('first-round'),
  progress: inject('progress'),

  actions: {
    pickTeam(team) {
      var model = this.modelFor(this.routeName);
      var rounds = model.get('rounds');
      var currentRound = parseInt(this.paramsFor('bracket.round').round, 10);
      var currentMatchup = parseInt(this.paramsFor('bracket.round.matchup').matchup, 10);

      rounds.objectAt(currentRound+1).replace(currentMatchup, 1, [team]);

      this.send('advance', currentRound, currentMatchup);
    },
    advance(currentRound, currentMatchup) {
      var rounds = this.modelFor(this.routeName).get('rounds');
      var round = rounds.objectAt(currentRound);
      var roundLength = round.get('length');

      var nextMatch = currentMatchup + 1;
      var nextRound = currentRound;

      this.progress.update(rounds);

      if (currentMatchup === (roundLength / 2) - 1) {
        // end of round
        // is this is the end of the experience?
        if (currentRound === rounds.get('length')-2) {
          this.transitionTo('bracket.finish');
          return;
        }

        // otherwise just increment the round and reset match to 0
        nextRound += 1;
        nextMatch = 0;
      }

      this.transitionTo('bracket.round.matchup', nextRound, nextMatch);
    }
  },

  beforeModel(transition) {
    const integrity = this.get('firstRound.matchups').every((team) => {
      return !!TeamColors.findBy('id', team);
    });

    if (!integrity) {
      transition.abort();
    }
  },

  model() {
    var model = Object.extend({
      rounds: null
    }).create({
      rounds: []
    });

    var firstRound = this.get('firstRound.matchups');
    model.get('rounds').pushObject(firstRound);

    var divisions = [1, 2, 4, 8, 16, 32, 64];
    for(let i=1;i<7;i++) {
      // 6 rounds, 1st round is hard coded
      // create empty arrays to push to
      let round = Array.from({length: 64/divisions[i]});
      model.get('rounds').pushObject(round);
    }

    this.progress.start();

    return model;
  }
});
