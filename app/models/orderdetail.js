import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class OrderdetailModel extends Model {
  @attr('number') quantity;
  @hasMany('product') products;
  @belongsTo('order') order;
}
