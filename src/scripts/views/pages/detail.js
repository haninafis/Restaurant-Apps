import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import { restoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

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
    restaurantContainer.innerHTML = restoDetailTemplate(detailRestaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: detailRestaurant.id,
        name: detailRestaurant.name,
        pictureId: detailRestaurant.pictureId,
        rating: detailRestaurant.rating,
        city: detailRestaurant.city,
      },
    });
  },

};

export default Detail;
