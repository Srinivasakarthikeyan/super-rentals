import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {
  @service store;
  async model(params) {
    return { data:[{
        id:2,
        name:"Customer2"
    }]}
    //return this.store.find('rental', params.customer_id);
  }
}