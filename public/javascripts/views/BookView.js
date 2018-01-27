'use strict'
define([
  "jquery",
  "underscore", 
  "backbone",
  "models/BookModel",
  "collections/BookCollection",
  "views/BookListView",
  "views/BookSearchView",
  "hbs!templates/BookTemplate"
], 
/**
 * 検索条件のViewと
 * 検索結果のViewを取得してイベントを発行する
 */
function($, _, Backbone, Model, Collection, ListView, SearchView, template) {
  var BookView = Backbone.View.extend({
    /**
     * 初期処理
     */
    initialize: function() {
      console.log('BookView initialize start >>>');
      this.conditionModel = new Model.BookModel();
      this.bookCollection = new Collection.BookCollection();
      this.listenTo(this.bookCollection, 'sync', this.result);
      this.render();
      console.log('BookView initialize end <<<');
    },
    /**
     * イベント宣言
     */
    events: {
      'click #search_btn': 'click_search_btn'
    },
    /**
     * 検索ボタンクリックイベント
     */
    'click_search_btn': function(e) {
      console.log('BookView click_search_btn start >>>');
      // searchViewからモデルを取得し、リストへ渡す >> うまくバインドで来ていない
      this.bookCollection.setParams(this.conditionModel.get('id'), this.conditionModel.get('name'));
      this.bookCollection.fetch();
      console.log('BookView click_search_btn end <<<');
    },
    /**
     * 描画処理
     */
    render: function() {
      console.log('BookView render start >>>');
      this.$el.empty();
      this.$el.append(template({}));
      this.searchView = new SearchView.BookSearchView({el: '#search', model: this.conditionModel});
      this.listView = new ListView.BookListView({el: '#list'});
      console.log('BookView start end <<<');
      return this;
    },
    /**
     * 検索結果描画
     */
    result: function() {
      console.log('BookView result start >>>');
      this.listView._render(this.bookCollection);
      console.log('BookView result end <<<');
    },
  });
  return {
      "BookView": BookView
  };
});