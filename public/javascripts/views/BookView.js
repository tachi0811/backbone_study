'use strict'
define([
  "jquery",
  "underscore", 
  "backbone",
  "collections/BookCollection",
  "models/BookModel",
  "views/BookListView",
  "views/BookSearchView"
], 
/**
 * 検索条件のViewと
 * 検索結果のViewを取得してイベントを発行する
 */
function($, _, Backbone, Collection, Model, ListView, SearchView) {
  let BookView = Backbone.View.extend({
    /**
     * 初期処理
     */
    initialize: function() {
      this.render();
    },
    /**
     * イベント宣言
     */
    events: {
      'click #btnSearch': 'searchClick'
    },
    /**
     * 検索ボタンクリックイベント
     */
    searchClick: function(e) {
      console.log('bookView searchClick');
    },
    /**
     * 描画処理
     */
    render: function() {

      this.searchView = new SearchView.BookSearchView({el: '#search'});
      this.listView = new ListView.BookListView({el: '#list'});

      return self;
    }
  });
  return {
      "BookView": BookView
  };
});