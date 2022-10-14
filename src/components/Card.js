import {
  nascitaDiVenereCard,
  laCreazioneDiAdamoCard,
  ultimaCenaCard,
  theAnatomyLessonCard,
} from '../utils/data';

export default {
  data() {
    return {
      cards: [
        nascitaDiVenereCard,
        laCreazioneDiAdamoCard,
        ultimaCenaCard,
        theAnatomyLessonCard,
      ],
    };
  },
  template:
  `<article class="card main__card" v-for="card in cards">
  <img class="main__card_image" :src="card.image"/>
  <h2 class="main__card_title">{{card.title}}</h2>
  <div class="main__card_buy-section">
    <h3 class="main__card_price">{{card.price}}</h3>
    <button class="main__card_buy-button">Купить</button>
  </div>
</article>`,
};
