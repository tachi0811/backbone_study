'use strict'
define([
  "jquery",
  "underscore", 
  "backbone",
], 
/**
 * 検索条件のView
 */
function($, _, Backbone) {
  let BookSearchView = Backbone.View.extend({
    /**
     * 初期処理
     */
    initialize: function() {

      console.log('book search view initialize');
      this.render();

    },
    /**
     * 読み込み
     */
    render: function() {

      let self = this;

      // ココはテンプレート化したい
      let tag = '';
      tag = tag.concat("ID:<input type='text' id='txtId'></input>");
      tag = tag.concat("名前：<input type='text' id='txtName'></input>");
      tag = tag.concat("<input type='button' id='btnSearch' value='検索'></input>");

      self.$el.append(tag);

      return self;
    }
  });
  return {
      "BookSearchView": BookSearchView
  };
});