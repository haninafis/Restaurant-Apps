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
    if (favoriteResto.length > 0) {
      favoriteResto.forEach((resto) => {
        restaurantContainer.innerHTML += restoItemTemplate(resto);
      });
    } else {
      restaurantContainer.innerHTML += `
            <div class="not-found">
                <h3 class="resto_not_found">Tidak ada resto untuk ditampilkan</h3>
            </div>
            `;
    }
  },
};

export default Favorite;
