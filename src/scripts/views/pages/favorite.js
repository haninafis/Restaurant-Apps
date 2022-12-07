import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { restoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="content">
            <h1>Favorite Restaurant</h1>
            <div id="restaurants" class="list"></div>
        </div>
        `;
  },

  async afterRender() {
    const favoriteResto = await FavoriteRestoIdb.getAllRestos();
    const restaurantContainer = document.querySelector('#restaurants');
    favoriteResto.forEach((restaurant) => {
      restaurantContainer.innerHTML += restoItemTemplate(restaurant);
    });
  },
};

export default Favorite;
