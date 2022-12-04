import DataSource from '../../data/data-source';

const Home = {
  async render() {
    return `
        <h2>Home Page</h2>
      `;
  },

  async afterRender() {
    const restos = await DataSource.restaurantList();
    console.log(restos);
  },
};

export default Home;
