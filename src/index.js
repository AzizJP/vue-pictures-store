import './pages/index.css';
import App from './components/App';

// eslint-disable-next-line no-undef
const { createApp } = Vue;

createApp({
  data() {
    return {};
  },
  components: {
    App,
  },
}).mount('#app');
