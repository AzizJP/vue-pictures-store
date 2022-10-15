(()=>{"use strict";var e="";const n={cards:[{title:"«Рождение Венеры» Сандро Боттичелли",image:e+"89837fecdeb792c7d0f2.jpg",isDiscount:!0,price:"1 000 000 $",discount:"2 000 000 $",isInTheBasket:!1,sale:!1},{title:"«Тайная вечеря»  Леонардо да Винчи",image:e+"ffe93d3c75b3e56e16be.jpg",isDiscount:!1,discount:"",price:"3 000 000 $",isInTheBasket:!1,sale:!1},{title:"«Сотворение Адама» Микеланджело",image:e+"cbee1fae1faebed96b30.jpg",isDiscount:!0,discount:"6 000 000 $",price:"5 000 000 $",isInTheBasket:!1,sale:!1},{title:"«Урок анатомии»  Рембрандт",image:e+"0f59b765b22fa3870916.jpg",isDiscount:!1,discount:"",price:"5 000 000 $",isInTheBasket:!1,sale:!0}],search:""},a={components:{SearchComponent:{data:function(){return{search:""}},created:function(){this.search=n.search},methods:{viewInputValue:function(){this.$emit("viewInputValue",this.search)}},template:'<div class="search" >\n      <input\n      @keydown.enter="viewInputValue"\n        type="search"\n        v-model="search"\n        class="search__input"\n        placeholder="Поиск по названию картины"\n      />\n      <button\n      type="button"\n      class="search__button"\n      @click="viewInputValue"\n      >Найти</button>\n    </div>'}},methods:{viewInputValue:function(e){this.$emit("viewInputValue",e)}},template:'<header class="header">\n  <div class="wrapper">\n    <nav class="menu">\n      <ul class="menu__list">\n        <a href="#" class="menu__item">Каталог</a>\n        <a href="#" class="menu__item">Доставка</a>\n        <a href="#" class="menu__item">Оплата</a>\n        <a href="#" class="menu__item">Контакты</a>\n        <a href="#" class="menu__item">О компании</a>\n      </ul>\n    </nav>\n    <Search-Component @viewInputValue="viewInputValue"></Search-Component>\n  </div>\n</header>'},t={data:function(){return{search:""}},components:{HeaderComponent:a,Main:{props:{search:{type:String}},components:{Card:{props:{search:{type:String}},data:function(){return{searchProps:this.search,cards:[]}},created:function(){this.cards=n.cards},computed:{searchHandler:function(){var e=this;return this.cards.filter((function(n){return n.title.toLowerCase().includes(e.search.toLowerCase())}))}},methods:{buttonClickToggle:function(e){this.cards[e].isInTheBasket=!this.cards[e].isInTheBasket,localStorage.setItem("cards",JSON.stringify(this.cards))}},mounted:function(){var e=localStorage.getItem("cards");this.cards=JSON.parse(e)},components:{HeaderComponent:a,Data:n},template:'\n  <article\n  class="card main__card"\n  v-for="(card, id) in searchHandler"\n  >\n  <div :class="[card.sale ? \'main__card_disabled\' : \'\']"></div>\n  <img class="main__card_image" :src="card.image"/>\n  <h2 class="main__card_title">{{card.title}}</h2>\n  <div class="main__card_buy-section">\n    <div class="main__card_price-section">\n      <p class="hidden" :class="[card.isDiscount ? \'main__card_discount\' : \'\']">{{card.discount}}</p>\n      <p class="main__card_price">{{card.sale ? \'Продана на аукционе\' : card.price}}</p>\n    </div>\n    <button\n    class="hidden"\n    :class="[card.sale ? \'\': \'main__card_buy-button\']"\n    @click="buttonClickToggle(id)"\n    >{{card.isInTheBasket ? \'&#10003; В корзине\' : \'Купить\'}}</button>\n  </div>\n</article>'}},template:'<div class="container">\n      <main class="main">\n        <h1 class="main__title">Картины эпохи возрождения</h1>\n        <section class="main__cards">\n          <Card :search="search"></Card>\n        </section>\n      </main>\n    </div>'},FooterComponent:{template:'<footer class="footer">\n  <div class="wrapper">\n    <nav class="menu menu__footer">\n      <ul class="menu__list">\n        <a href="#" class="menu__item menu__item_place_footer"\n          >Каталог</a\n        >\n        <a href="#" class="menu__item menu__item_place_footer"\n          >Доставка</a\n        >\n        <a href="#" class="menu__item menu__item_place_footer"\n          >Оплата</a\n        >\n        <a href="#" class="menu__item menu__item_place_footer"\n          >Контакты</a\n        >\n        <a href="#" class="menu__item menu__item_place_footer"\n          >О компании</a\n        >\n      </ul>\n    </nav>\n    <address class="footer__contacts">\n      <a href="#" class="footer__contacts_wrapper">\n        <div class="footer__phone-icon"></div>\n        <p href="#" class="footer__text">+7 (812) 555-55-55</p>\n      </a>\n      <a href="#" class="footer__contacts_wrapper">\n        <div class="footer__address-icon"></div>\n        <p class="footer__text">г. Санкт-Петербург, ул. Ефимова, 3</p>\n      </a>\n    </address>\n  </div>\n</footer>'}},methods:{viewInputValue:function(e){this.search=e}},template:'<Header-Component @viewInputValue="viewInputValue"></Header-Component>\n    <Main :search="search"></Main>\n    <Footer-Component></Footer-Component>'};(0,Vue.createApp)({data:function(){return{}},components:{App:t}}).mount("#app")})();