import { getTeamName } from '../../../helpers/get-team-name';
import { module, test } from 'qunit';

module('Unit | Helper | get team name', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let result = getTeamName(42);
    assert.ok(result);
  });
});
