import Ember from 'ember';

export default Ember.Route.extend({
  teamService: Ember.inject.service('teams'),
  teams: Ember.computed.alias('teamService.teams'),

  model(params) {
    var round = this.modelFor('bracket.round');

    // because the teams are a flat array without matchup definition
    // we perform the logic to pair them.
    // the matchups are in order, so team 0 and 1 are a matchup, team 2 and 3 are, etc

    // to get a reference to the first team of a pair, we multiply our matchup index by 2
    // then we can just +1 that index to get the other team
    var matchup = [];
    var teamIndex = params.matchup*2;

    var firstTeam = round.objectAt(teamIndex);
    matchup.push(this.getTeamReference(firstTeam));

    var secondTeam = round.objectAt(teamIndex+1);
    if (secondTeam) {
      matchup.push(this.getTeamReference(secondTeam));
    }

    return Ember.Object.extend({
      'round': parseInt(this.paramsFor('bracket.round').round, 10)+1,
      'matchup': matchup
    }).create();
  },

  getTeamReference(ref) {
    return {
      'ref': ref,
      'colors': this.get('teams').findBy('id', ref).colors
    };
  },

  actions: {
    pickTeam(team) {
      return true;
    }
  }
});
