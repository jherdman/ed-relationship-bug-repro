import EmberRouter from '@ember/routing/router';
import config from 'ed-regression-repro/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('cars');
  this.route('car', { path: '/cars/:id' }, function () {
    this.route('colours');
  });
});
