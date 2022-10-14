import venere from '../assets/Nascita-di-Venere.jpg';
import adamo from '../assets/La-creazione-di-Adamo.jpg';
import lesson from '../assets/The-Anatomy-Lesson.jpg';
import cena from '../assets/Ultima-cena.jpg';

const nascitaDiVenereCard = {
  title: '«Рождение Венеры» Сандро Боттичелли',
  image: venere,
  price: '1 000 000 $',
  sale: false,
};

const ultimaCenaCard = {
  title: '«Тайная вечеря»  Леонардо да Винчи',
  image: cena,
  price: '3 000 000 $',
  sale: false,
};

const laCreazioneDiAdamoCard = {
  title: '«Сотворение Адама» Микеланджело',
  image: adamo,
  price: '5 000 000 $',
  sale: false,
};

const theAnatomyLessonCard = {
  title: '«Урок анатомии»  Рембрандт',
  image: lesson,
  price: '5 000 000 $',
  sale: true,
};

export {
  nascitaDiVenereCard,
  laCreazioneDiAdamoCard,
  ultimaCenaCard,
  theAnatomyLessonCard,
};
