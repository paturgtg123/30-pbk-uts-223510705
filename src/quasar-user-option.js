import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';
import { Notify, Ripple } from 'quasar';

export default {
  config: {
    notify: {},
  },
  plugins: {
    Notify,
  },
  directives: {
    Ripple,
  },
};
