import venere from '../assets/Nascita-di-Venere.jpg';
import adamo from '../assets/La-creazione-di-Adamo.jpg';
import lesson from '../assets/The-Anatomy-Lesson.jpg';
import cena from '../assets/Ultima-cena.jpg';

const nascitaDiVenereCard = {
  title: '«Рождение Венеры» Сандро Боттичелли',
  image: venere,
  isDiscount: true,
  price: '1 000 000 $',
  discount: '2 000 000 $',
  isInTheBasket: false,
  sale: false,
};

const ultimaCenaCard = {
  title: '«Тайная вечеря»  Леонардо да Винчи',
  image: cena,
  isDiscount: false,
  discount: '',
  price: '3 000 000 $',
  isInTheBasket: false,
  sale: false,
};

const laCreazioneDiAdamoCard = {
  title: '«Сотворение Адама» Микеланджело',
  image: adamo,
  isDiscount: true,
  discount: '6 000 000 $',
  price: '5 000 000 $',
  isInTheBasket: false,
  sale: false,
};

const theAnatomyLessonCard = {
  title: '«Урок анатомии»  Рембрандт',
  image: lesson,
  isDiscount: false,
  discount: '',
  price: '5 000 000 $',
  isInTheBasket: false,
  sale: true,
};

export {
  nascitaDiVenereCard,
  laCreazioneDiAdamoCard,
  ultimaCenaCard,
  theAnatomyLessonCard,
};
