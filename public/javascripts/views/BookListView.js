'use strict'
define([
  "jquery",
  "underscore", 
  "backbone",
  "collections/BookCollection",
  "models/BookModel",
], 
/**
 * 検索結果のリストView
 */
function($, _, Backbone, Collection, Model) {
  let BookListView = Backbone.View.extend({
    /**
     * 初期処理
     */
    initialize: function() {

      let bookCollection = new Collection.BookCollection(
        {model: new Model.BookModel()}
      );
      this.collection = bookCollection;

      console.log('book view initialize');
      // サーバーからデータ取得
      this.collection.fetch();
      // サーバーからデータ取得後にrenderを呼び出して、タグを生成
      this.listenTo(this.collection, 'sync', this.render);
    },
    /**
     * 描画処理
     */
    render: function() {
      let self = this;
      // TODO:ココをhandlebarsにする
      let tag = '';
      this.collection.forEach(function(model) {
        tag = tag.concat('<ul>', model.get('id'), ' ', model.get('name'), '</ul>');
      });

      self.$el.append('Hello World');
      self.$el.append(tag);

      return self;
    }
  });
  return {
      "BookListView": BookListView
  };
});