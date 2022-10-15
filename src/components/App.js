import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import Main from './Main';
import {
  nascitaDiVenereCard,
  laCreazioneDiAdamoCard,
  ultimaCenaCard,
  theAnatomyLessonCard,
} from '../utils/data';

export default {
  data() {
    return {
      search: '',
      cards: [
        nascitaDiVenereCard,
        ultimaCenaCard,
        laCreazioneDiAdamoCard,
        theAnatomyLessonCard,
      ],
    };
  },
  components: {
    HeaderComponent,
    Main,
    FooterComponent,
  },
  template:
    `<Header-Component :search="search"></Header-Component>
    <Main :cards="cards" :search="search"></Main>
    <Footer-Component></Footer-Component>`,
};
