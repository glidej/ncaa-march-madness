import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bracket/round', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bracket/round');
    assert.ok(route);
  });
});
