import axios from 'axios';

class BeerService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
    });
  }

  getBeers() {
    return this.api.get('/').then(({data}) => data);
  }

  getOneBeer(id) {
    return this.api.get(`/${id}`).then(({ data }) => data);
  }

  getRandomBeer() {
    return this.api.get(`/random`).then(({ data }) => data);
  }

  createBeer(body) {
    return this.api.post('/new', body).then(({ data }) => data);
  }

  searchBeers(query) {
    return this.api.get(`/search?q=${query}`).then((response) => response.data);
  }
}

const beerService = new BeerService();

export default beerService;
