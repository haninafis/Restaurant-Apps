import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import list from '../DATA.json';

const datas = list.restaurants;
let dataList = '';
datas.forEach((data) => {
  dataList += `
    <div class="list_item">
        <img class="list_item_img" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
        <div class="city">${data.city}</div>
        <div class="list_item_detail">
            <p class="list_item_rating">Rating : <a href="#" class="list_item_rating_value">${data.rating}</a></p>
            <h2 class="list_item_title"><a href="#">${data.name}</a></h2>
            <div class="list_item_description">${data.description.slice(0, 125)}...</div>
        </div>
    </div>
    `;
});
document.querySelector('#list').innerHTML = dataList;

const menu = document.querySelector('#menu');
const hero = document.querySelector('.heroelement');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});
