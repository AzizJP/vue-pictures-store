import SearchComponent from './SearchComponent';

export default {
  props: ['search'],
  components: {
    SearchComponent,
  },
  template:
  `<header class="header">
  <div class="wrapper">
    <nav class="menu">
      <ul class="menu__list">
        <a href="#" class="menu__item">Каталог</a>
        <a href="#" class="menu__item">Доставка</a>
        <a href="#" class="menu__item">Оплата</a>
        <a href="#" class="menu__item">Контакты</a>
        <a href="#" class="menu__item">О компании</a>
      </ul>
    </nav>
    <Search-Component :search="search"></Search-Component>
  </div>
</header>`,
};
