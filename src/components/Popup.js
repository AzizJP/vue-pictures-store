export default {
  props: {
    card: {
      type: Object,
    },
  },
  methods: {
    closePopup() {
      this.card.isPopupOpen = false;
    },
  },
  template:
  `<div class="popup" :class="card.isPopupOpen === true ? 'popup__opened' : ''">
    <div class="popup__container">
      <button class="popup__close" @click="closePopup()"></button>
      <h3 class="popup__title">{{card.title}}</h3>
      <p class="hidden" :class="card.isDiscount === true ? 'popup__discount' : ''">Цена: {{card.discount}}</p>
      <p class="popup__price">{{card.isDiscount === true ? 'Только сегодня: ' : 'Цена: '}}{{card.price}}</p>
      <img class="popup__image" :src="card.image"/>
    </div>
  </div>`,
};
