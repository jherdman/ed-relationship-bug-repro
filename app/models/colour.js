import Model, { attr, belongsTo } from '@ember-data/model';

export default class ColourModel extends Model {
  @attr('string') name;
  @belongsTo('car', { async: true }) car;
}
