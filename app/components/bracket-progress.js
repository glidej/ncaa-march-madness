import Ember from 'ember';

export default Ember.Component.extend({
    progress: Ember.inject.service('progress'),
    percentage: Ember.computed.alias('progress.percentage'),
    started: Ember.computed.alias('progress.started')
});
