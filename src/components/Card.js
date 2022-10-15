import HeaderComponent from './HeaderComponent';
import Data from '../utils/data';

export default {
  props: {
    search: {
      type: String,
    },
  },
  data() {
    return {
      searchProps: this.search,
      cards: [],
    };
  },
  created() {
    this.cards = Data;
  },
  computed: {
    searchHandler() {
      return this.cards.filter(
        (card) => card.title.toLowerCase().includes(this.search.toLowerCase()),
      );
    },
  },
  methods: {
    buttonClickToggle(id) {
      this.cards[id].isInTheBasket = !this.cards[id].isInTheBasket;
      localStorage.setItem('cards', JSON.stringify(this.cards));
    },
  },
  mounted() {
    const cardsOnLS = localStorage.getItem('cards');
    this.cards = JSON.parse(cardsOnLS);
  },
  components: {
    HeaderComponent,
    Data,
  },
  template: `
  <article
  class="card main__card"
  v-for="(card, id) in searchHandler"
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
