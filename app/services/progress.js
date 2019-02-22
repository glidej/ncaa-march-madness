import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
    total: 0,
    completed: 0,
    started: false,

    percentage: computed('total', 'completed', function () {
        const total = this.total;
        const completed = this.completed;

        if (total === 0 && completed === 0) {
            return 0;
        }

        return Math.round((completed / total) * 100);
    }),

    update(bracket) {
        const rounds = bracket.filter((round, index) => index !== 0);

        const totalLength = rounds.reduce((count, round) => {
            return count + round.length;
        }, 0);

        const completed = rounds.reduce((completed, round) => {
            return completed + round.filter(matchup => typeof matchup !== "undefined").length;
        }, 0);

        this.set('total', totalLength);
        this.set('completed', completed);
    },

    start() {
        this.set('started', true);
    }
});
