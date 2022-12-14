import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import { restoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

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
    console.log(detailRestaurant);
    const restaurantContainer = document.querySelector('#resto');
    restaurantContainer.innerHTML = restoDetailTemplate(detailRestaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      resto: {
        id: detailRestaurant.id,
        name: detailRestaurant.name,
        pictureId: detailRestaurant.pictureId,
        rating: detailRestaurant.rating,
        city: detailRestaurant.city,
        description: detailRestaurant.description,
      },
    });
  },

};

export default Detail;
