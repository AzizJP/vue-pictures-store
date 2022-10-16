import venere from '../assets/Nascita-di-Venere.jpg';
import venereScnd from '../assets/Nascita-di-Venere-2.jpg';
import venereThrd from '../assets/Nascita-di-Venere-3.jpg';
import cena from '../assets/Ultima-cena.jpg';
import cenaScnd from '../assets/Ultima-cena-2.jpg';
import cenaThrd from '../assets/Ultima-cena-3.jpg';
import adamo from '../assets/La-creazione-di-Adamo.jpg';
import adamoScnd from '../assets/La-creazione-di-Adamo-2.jpg';
import adamoThrd from '../assets/La-creazione-di-Adamo-3.jpg';
import lesson from '../assets/The-Anatomy-Lesson.jpg';

const search = '';

const cards = [
  {
    title: '«Рождение Венеры» Сандро Боттичелли',
    image: [venere, venereScnd, venereThrd],
    isDiscount: true,
    price: '1 000 000 $',
    discount: '2 000 000 $',
    buttonValue: 'Купить',
    sale: false,
    isPopupOpen: false,
  },
  {
    title: '«Тайная вечеря»  Леонардо да Винчи',
    image: [cena, cenaScnd, cenaThrd],
    isDiscount: false,
    discount: '',
    price: '3 000 000 $',
    buttonValue: 'Купить',
    sale: false,
    isPopupOpen: false,
  },
  {
    title: '«Сотворение Адама» Микеланджело',
    image: [adamo, adamoScnd, adamoThrd],
    isDiscount: true,
    discount: '6 000 000 $',
    price: '5 000 000 $',
    buttonValue: 'Купить',
    sale: false,
    isPopupOpen: false,
  },
  {
    title: '«Урок анатомии»  Рембрандт',
    image: [lesson, lesson, lesson],
    isDiscount: false,
    discount: '',
    price: '5 000 000 $',
    buttonValue: 'Купить',
    sale: true,
    isPopupOpen: false,
  },
];

export default { cards, search };
