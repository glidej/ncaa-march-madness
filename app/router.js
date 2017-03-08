import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bracket', function() {
    this.route('round', { path: 'round/:round'}, function() {
      this.route('matchup', {path: 'matchup/:matchup'});
    });
    this.route('finish');
  });
});

export default Router;
