import domMixin from './dom';
import { UI_PROGRESS } from '../components/progress-indicators/constants';

export default {
  mixins: [domMixin],
  props: {
    // States
    active: {
      type: Boolean,
      default: false
    },
    progress: {
      type: Number,
      default: 0
    },
    // UI attributes
    label: String,
    closed: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    progress(val) {
      this.setProgress(val);
    }
  },
  methods: {
    setProgress(value) {
      const $currentProgress = this.$linearProgress || this.$circularProgress;

      if (
        $currentProgress &&
        value >= UI_PROGRESS.VALUE.MIN &&
        value <= UI_PROGRESS.VALUE.MAX
      ) {
        $currentProgress.progress = value;
      } else {
        console.warn(
          '[UiProgress/UiSpinner]',
          'The value should be between [0, 1]'
        );
      }
    }
  }
};
