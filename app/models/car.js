import Model, { attr, hasMany } from '@ember-data/model';

export default class CarModel extends Model {
  @attr('string') brand;
  @attr('string') model;
  @hasMany('colour', { async: true }) colours;
}
