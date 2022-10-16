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
      cards: [],
      text: { id: '', value: '' },
    };
  },
  created() {
    this.cards = Data.cards;
  },
  computed: {
    searchHandler() {
      return this.cards.filter(
        (card) => card.title.toLowerCase().includes(this.search.toLowerCase()),
      );
    },
  },
  methods: {
    async buttonClickToggle(id) {
      if (this.cards[id].buttonValue === 'В корзине') {
        this.cards[id].buttonValue = 'Купить';
      } else if (this.cards[id].buttonValue === 'Купить') {
        await this.delay(this.cards[id].buttonValue = 'Обработка', 2000);
        this.cards[id].buttonValue = 'В корзине';
      }
      localStorage.setItem('cards', JSON.stringify(this.cards));
    },
    delay(foo, ms) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(foo), ms);
      });
    },
    openPopup(id) {
      this.cards[id].isPopupOpen = true;
    },
    getCardById(id) {
      this.$emit('getCardById', this.cards[id]);
    },
  },
  mounted() {
    if (localStorage.cards) {
      const cardsOnLS = localStorage.getItem('cards');
      this.cards = JSON.parse(cardsOnLS);
    }
  },
  components: {
    HeaderComponent,
  },
  template: `
  <article
  class="card main__card"
  v-for="(card, id) in searchHandler"
  >
  <div :class="[card.sale ? 'main__card_disabled' : '']"></div>
    <img class="main__card_image" :src="card.image[0]" @click="openPopup(id), getCardById(id)"/>
    <h2 class="main__card_title">{{card.title}}</h2>
  <div class="main__card_buy-section">
    <div class="main__card_price-section">
      <p class="hidden" :class="[card.isDiscount ? 'main__card_discount' : '']">{{card.discount}}</p>
      <p class="main__card_price">{{card.sale ? 'Продана на аукционе' : card.price}}</p>
    </div>
    <button
    class="hidden"
    :class="[card.sale ? '' : 'main__card_buy-button'],card.buttonValue === 'В корзине'&& ['main__card_buy-button_type_busket'],
    card.buttonValue === 'Обработка'&& ['main__card_buy-button_type_processed']"
    @click="buttonClickToggle(id)"
    >
    <div
    class="hidden"
    :class="card.buttonValue === 'В корзине'&& ['main__card_icon']"></div>
    <p class="main__card_buy-button_type_text">{{card.buttonValue}}</p></button>
  </div>
</article>`,
};
