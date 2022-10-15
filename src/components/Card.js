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
        ultimaCenaCard,
        laCreazioneDiAdamoCard,
        theAnatomyLessonCard,
      ],
    };
  },
  methods: {
    buttonClickToggle(id) {
      this.cards[id].isInTheBasket = !this.cards[id].isInTheBasket;
    },
  },
  template:
  `<article
  class="card main__card"
  v-for="(card, id) in cards"
  >
  <div :class="[card.sale ? 'main__card_disabled' : '']"></div>
  <img class="main__card_image" :src="card.image"/>
  <h2 class="main__card_title">{{card.title}}</h2>
  <div class="main__card_buy-section">
    <div class="main__card_price-section">
      <p class="hidden" :class="[card.isDiscount ? 'main__card_discount' : '']">{{card.discount}}</p>
      <p class="main__card_price">{{card.sale ? 'Продана на аукционе' : card.price}}</p>
    </div>
    <button
    class="hidden"
    :class="[card.sale ? '': 'main__card_buy-button']"
    @click="buttonClickToggle(id)"
    >{{card.isInTheBasket ? '&#10003; В корзине' : 'Купить'}}</button>
  </div>
</article>`,
};
