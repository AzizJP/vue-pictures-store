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
  template:
    `<div class="container">
      <main class="main">
        <h1 class="main__title">Картины эпохи возрождения</h1>
        <section class="main__cards">
          <Card :search="search" />
        </section>
      </main>
    </div>`,
};
