import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    pick(team) {
      this.send('pickTeam', team);
    }
  }
});
