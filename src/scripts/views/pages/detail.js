import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import { restoDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div id="resto" class="resto"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let detailRestaurant = await DataSource.detailRestaurant(url.id);
    detailRestaurant = detailRestaurant.restaurant;
    const restaurantContainer = document.querySelector('#resto');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    restaurantContainer.innerHTML = restoDetailTemplate(detailRestaurant);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },

};

export default Detail;
