import venere from '../assets/Nascita-di-Venere.jpg';
import venereScnd from '../assets/Nascita-di-Venere-a.jpg';
import venereThrd from '../assets/Nascita-di-Venere-b.jpg';
import cena from '../assets/Ultima-cena.jpg';
import cenaScnd from '../assets/Ultima-cena-a.jpg';
import cenaThrd from '../assets/Ultima-cena-b.jpg';
import adamo from '../assets/La-creazione-di-Adamo.jpg';
import adamoScnd from '../assets/La-creazione-di-Adamo-a.jpg';
import adamoThrd from '../assets/La-creazione-di-Adamo-b.jpg';
import lesson from '../assets/The-Anatomy-Lesson.jpg';

const search = '';

const cards = [
  {
    title: '«Рождение Венеры» Сандро Боттичелли',
    image: venere,
    images: [venere, venereScnd, venereThrd],
    isDiscount: true,
    price: '1 000 000 $',
    discount: '2 000 000 $',
    buttonValue: 'Купить',
    sale: false,
    isPopupOpen: false,
  },
  {
    title: '«Тайная вечеря»  Леонардо да Винчи',
    image: cena,
    images: [cena, cenaScnd, cenaThrd],
    isDiscount: false,
    discount: '',
    price: '3 000 000 $',
    buttonValue: 'Купить',
    sale: false,
    isPopupOpen: false,
  },
  {
    title: '«Сотворение Адама» Микеланджело',
    image: adamo,
    images: [adamo, adamoScnd, adamoThrd],
    isDiscount: true,
    discount: '6 000 000 $',
    price: '5 000 000 $',
    buttonValue: 'Купить',
    sale: false,
    isPopupOpen: false,
  },
  {
    title: '«Урок анатомии»  Рембрандт',
    image: lesson,
    images: [lesson, lesson, lesson],
    isDiscount: false,
    discount: '',
    price: '5 000 000 $',
    buttonValue: 'Купить',
    sale: true,
    isPopupOpen: false,
  },
];

export default { cards, search };
