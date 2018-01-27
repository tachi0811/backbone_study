'use strict'
define([
  "jquery",
  "underscore", 
  "backbone",
  "hbs!templates/BookListTemplate"
], 
/**
 * 検索結果のリストView
 */
function($, _, Backbone, template) {
  var BookListView = Backbone.View.extend({
    /**
     * 初期処理
     */
    initialize: function() {
      console.log('BookListView initialize start >>>');
      this.render();
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
      this.$el.empty();
      this.$el.append(template( { books: null }));
      console.log("BookListView render end <<<")
      return this;
    },
    /**
     * 一覧描画処理
     */
    _render: function(collection) {
      console.log('BookListView _render start >>>');
      this.$el.empty();
      this.$el.append(template( { books: collection.toJSON() }));
      console.log('BookListView _render end <<<');
    }
  });
  return {
      "BookListView": BookListView
  };
});