import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import Main from './Main';

export default {
  data() {
    return {
      search: '',
    };
  },
  components: {
    HeaderComponent,
    Main,
    FooterComponent,
  },
  methods: {
    viewInputValue(value) {
      this.search = value;
    },
  },
  template:
    `<Header-Component @viewInputValue="viewInputValue"></Header-Component>
    <Main :search="search"></Main>
    <Footer-Component></Footer-Component>`,
};
