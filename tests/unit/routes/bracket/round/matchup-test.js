import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bracket/round/matchup', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bracket/round/matchup');
    assert.ok(route);
  });
});
