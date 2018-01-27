'use strict'
define([
  "jquery",
  "underscore", 
  "backbone",
  "stickit",
  "hbs!templates/BookSearchTemplate"
], 
/**
 * 検索条件のView
 */
function($, _, Backbone, stickit, template) {
  var BookSearchView = Backbone.View.extend({
    /**
     * bindings 設定
     */
    bindings: {
      '#id': "id",
      '#name': "name"
    },
    /**
     * 初期処理
     */
    initialize: function() {
      console.log('BookSearchView initialize start >>>');
      this.render();
      console.log('BookSearchView initialize end <<<');
    },
    /**
     * 読み込み
     */
    render: function() {
      console.log('BookSearchView render start >>>');
      this.$el.empty();
      this.$el.append(template({}));
      // 値をバインド
      this.stickit();
      console.log('BookSearchView render end <<<');
      return this;
    }
  });
  return {
      "BookSearchView": BookSearchView
  };
});