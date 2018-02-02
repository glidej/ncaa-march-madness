
import Component from '@ember/component';
import { inject } from '@ember/service';
import { alias } from '@ember/object/computed'

export default Component.extend({
    progress: inject('progress'),
    percentage: alias('progress.percentage'),
    started: alias('progress.started')
});
