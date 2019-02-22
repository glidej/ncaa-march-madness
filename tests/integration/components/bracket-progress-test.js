import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bracket progress', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{bracket-progress}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#bracket-progress}}
        template block text
      {{/bracket-progress}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
