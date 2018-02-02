import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
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
