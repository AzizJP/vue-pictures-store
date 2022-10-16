export default {
  props: {
    card: {
      type: Object,
    },
  },
  data() {
    return {
      slideIndex: 0,
      wrapperImageStyle: 0,
    };
  },
  methods: {
    closePopup() {
      this.card.isPopupOpen = false;
    },
    prevSlide() {
      if (this.slideIndex > 0) {
        this.slideIndex -= 1;
      }
    },
    nextSlide() {
      this.slideIndex += 1;
    },
  },
  template:
  `<div
    class="popup"
    :class="card.isPopupOpen === true ? 'popup__opened' : ''"
    @click="closePopup()">
    <div class="popup__container"
      @click="(evt) => {
        evt.stopPropagation();
      }">
      <button class="popup__close" @click="closePopup()"></button>
      <h3 class="popup__title">{{card.title}}</h3>
      <p class="hidden" :class="card.isDiscount === true ? 'popup__discount' : ''">Цена: {{card.discount}}</p>
      <p class="popup__price">{{card.isDiscount === true ? 'Только сегодня: ' : 'Цена: '}}{{card.price}}</p>
      <div class="popup__wrapper">
        <div
        class="popup__image_wrapper"
        :style="{'margin-left': '-' + (100 * slideIndex) + '%'}">
          <img
          class="popup__image"
          v-for="(image, id) in card.image"
          :src="card.image[id]"/>
        </div>
        <button
        class="popup__slide-button popup__slide-button_place_left"
        @click="prevSlide"
        :style="slideIndex === 0 && {'visibility': 'hidden'}">
          &#8920;
        </button>
        <button
        class="popup__slide-button popup__slide-button_place_right"
        @click="nextSlide"
        :style="slideIndex >= 2 && {'visibility': 'hidden'}">
          &#8921;
        </button>
      </div>
    </div>
  </div>`,
};
