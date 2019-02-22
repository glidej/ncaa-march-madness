import Component from '@ember/component';
import { computed } from '@ember/object';
import computedStyle from 'ember-computed-style';

export default Component.extend({
  classNames: ['color'],
  style: computedStyle('background'),

  background: computed('color', function() {
    const color = this.color;

    return {
      backgroundColor: color
    };
  }),

  attributeBindings: ['style']
});
