import cardEat from '../templates/cards.hbs';
import dataCards from './menu.json';
import localestorage from './localestorage.js';

const menuLayout = document.querySelector('.js-menu');
console.log(menuLayout);
const markup = cardEat(dataCards);
menuLayout.insertAdjacentHTML('beforeend', markup);


function createCardMarkup(dataCards) {
    /* return dataCards.map(cardEat).join(''); */
    return cardEat(dataCards);
}