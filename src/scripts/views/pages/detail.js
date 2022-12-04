import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';

const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.detailRestaurant(url.id);
    console.log(restaurant);
  },
};

export default Detail;
