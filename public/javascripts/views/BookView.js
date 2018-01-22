'use strict'
define([
  "jquery",
  "underscore", 
  "backbone",
  "collections/BookCollection",
  "models/BookModel",
  "views/BookListView",
  "views/BookSearchView",
  "hbs!templates/BookTemplate"
], 
/**
 * 検索条件のViewと
 * 検索結果のViewを取得してイベントを発行する
 */
function($, _, Backbone, Collection, Model, ListView, SearchView, template) {
  var BookView = Backbone.View.extend({
    /**
     * 初期処理
     */
    initialize: function() {
      this.bookModel = new Model.BookModel();
      this.render();
    },
    /**
     * イベント宣言
     */
    events: {
      'click #search': true
    },
    /**
     * 検索ボタンクリックイベント
     */
    'click #search': function(e) {
      console.log('bookView searchClick');
      // searchViewからモデルを取得し、リストへ渡す >> うまくバインドで来ていない
      let searchParams = this.searchView.model;
      this.listView.read("1", null);
    },
    /**
     * 描画処理
     */
    render: function() {
      this.$el.empty();
      this.$el.append(template({}));
      this.searchView = new SearchView.BookSearchView({el: '#search', model: this.bookModel});
      this.listView = new ListView.BookListView({el: '#list'});

      return self;
    }
  });
  return {
      "BookView": BookView
  };
});