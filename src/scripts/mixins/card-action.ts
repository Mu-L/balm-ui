import { defineComponent } from 'vue';
import { getCurrentElement } from './dom';
import getType from '../utils/typeof';
import { VueClassName } from '@balm-ui-types';

// Define card constants
const UI_CARD = {
  cssClasses: {
    action: 'mdc-card__actions',
    button: 'mdc-card__action-buttons',
    icon: 'mdc-card__action-icons'
  }
};

export default defineComponent({
  data() {
    return {
      cardButton: false,
      cardIcon: false
    };
  },
  computed: {
    cardActionClassName(): VueClassName {
      return {
        'mdc-card__action': this.cardButton || this.cardIcon,
        'mdc-card__action--button': this.cardButton,
        'mdc-card__action--icon': this.cardIcon
      };
    }
  },
  mounted() {
    if (this.$parent && this.$parent.$el) {
      const parentEl = getCurrentElement(this.$parent.$el);

      if (parentEl && getType(parentEl) === 'htmldivelement') {
        this.cardButton =
          parentEl.classList.contains(UI_CARD.cssClasses.button) ||
          parentEl.classList.contains(UI_CARD.cssClasses.action);
        this.cardIcon = parentEl.classList.contains(UI_CARD.cssClasses.icon);
      }
    }
  }
});
