import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import { restoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div id="resto" class="resto"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let detailRestaurant = await DataSource.detailRestaurant(url.id);
    detailRestaurant = detailRestaurant.restaurant;
    const restaurantContainer = document.querySelector('#resto');
    restaurantContainer.innerHTML = restoDetailTemplate(detailRestaurant);
  },

};

export default Detail;
