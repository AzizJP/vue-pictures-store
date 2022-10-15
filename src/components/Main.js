import Card from './Card';

export default {
  props: ['cards', 'search'],
  components: {
    Card,
  },
  template:
    `<div class="container">
      <main class="main">
        <h1 class="main__title">Картины эпохи возрождения</h1>
        <section class="main__cards">
          <Card :cards="cards" :search="search"></Card>
        </section>
      </main>
    </div>`,
};
