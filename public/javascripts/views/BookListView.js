'use strict'
define([
  "jquery",
  "underscore", 
  "backbone",
  "collections/BookCollection",
  "models/BookModel",
  "hbs!templates/BookListTemplate"
], 
/**
 * 検索結果のリストView
 */
function($, _, Backbone, Collection, Model, template) {
  var BookListView = Backbone.View.extend({
    /**
     * 初期処理
     */
    initialize: function() {
      console.log('BookListView initialize start >>>');
      let bookCollection = new Collection.BookCollection(
        {model: new Model.BookModel()}
      );
      this.collection = bookCollection;
      // 初期描画処理
      this.read(null, null);
      this.listenTo(this.collection, 'sync', this.render);
      console.log('BookListView initialize end <<<');
    },
    /**
     * 再描画
     */
    read: function(id, name) {
      console.log('BookListView read start >>>');
      this.collection.setParams(id, name);
      // サーバーからデータ取得
      this.collection.fetch();
      // サーバーからデータ取得後にrenderを呼び出して、タグを生成
      console.log('BookListView read end <<<');
    },
    /**
     * 描画処理
     */
    render: function() {
      console.log("BookListView render start >>>")
      let self = this;
      self.$el.empty();
      self.$el.append(template( { books: this.collection.toJSON() }));
      console.log("BookListView render end <<<")
      return self;

    }
  });
  return {
      "BookListView": BookListView
  };
});