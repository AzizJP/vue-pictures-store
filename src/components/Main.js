import Card from './Card';

export default {
  props: {
    search: {
      type: String,
    },
  },
  components: {
    Card,
  },
  methods: {
    getCardById(card) {
      this.$emit('getCardById', card);
    },
  },
  template:
    `<div class="container">
      <main class="main">
        <h1 class="main__title">Картины эпохи возрождения</h1>
        <section class="main__cards">
          <Card
          :search="search"
          @getCardById="getCardById" />
        </section>
      </main>
    </div>`,
};
