import Data from '../utils/data';

export default {
  data() {
    return {
      search: '',
    };
  },
  created() {
    this.search = Data.search;
  },
  methods: {
    viewInputValue() {
      this.$emit('viewInputValue', this.search);
    },
  },
  template:
   `<div class="search" >
      <input
      @keydown.enter="viewInputValue"
        type="search"
        v-model="search"
        class="search__input"
        placeholder="Поиск по названию картины"
      />
      <button
      type="button"
      class="search__button"
      @click="viewInputValue"
      >Найти</button>
    </div>`,
};
