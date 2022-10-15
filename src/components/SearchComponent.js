export default {
  props: ['search'],
  template:
   `<form class="search">
   <p>{{search}}</p>
      <input
        type="search"
        v-model="search"
        class="search__input"
        placeholder="Поиск по названию картины"
      />
      <button
      type="submit"
      class="search__button"
      @click="searchHandler(id)"
      >Найти</button>
    </form>`,
};
