import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import Main from './Main';
import Popup from './Popup';

export default {
  data() {
    return {
      search: '',
      card: {},
    };
  },
  components: {
    HeaderComponent,
    Main,
    FooterComponent,
    Popup,
  },
  methods: {
    viewInputValue(value) {
      this.search = value;
    },
    getCardById(card) {
      this.card = card;
    },
  },
  template:
    `<Header-Component
      @viewInputValue="viewInputValue" />
    <Main
      :search="search"
      @getCardById="getCardById" />
    <Footer-Component />
    <Popup
      :card="card" />`,
};
