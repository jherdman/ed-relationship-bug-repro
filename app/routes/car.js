import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class extends Route {
  @service('store') store;

  model({ id }) {
    return this.store.find('car', id);
  }

  afterModel(car) {
    return car.colours;
  }
}
