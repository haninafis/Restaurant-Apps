import DataSource from '../../data/data-source';
import { restoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="content">
            <h1>Explore Restaurant</h1>
            <div id="restaurants" class="list"></div>
        </div>
        `;
  },

  async afterRender() {
    const restaurantsAPI = await DataSource.restaurantList();

    if (!restaurantsAPI.error) {
      const restaurantContainer = document.querySelector('#restaurants');
      restaurantsAPI.restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += restoItemTemplate(restaurant);
      });
    }
  },
};

export default Home;
