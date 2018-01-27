'use strict'
define([
  "jquery",
  "underscore", 
  "backbone",
], 
function($, _, Backbone) {
  /**
   * BookCollection
   */
  var BookCollection = Backbone.Collection.extend({
    url: '/books/',
    /**
     * 
     */
    initialize: function() {
      console.log("BookCollection initialize start >>>");

      console.log("BookCollection initialize end <<<");
    },
    /**
     * リストの取得
     */
    setParams: function(id, name) {
      console.log("BookCollection setParams start >>>");
      let url = '/books/';
      if (id === null || id.trim() === "") {
        id = '%20';
      } 
      if (name === null || name.trim() === "") {
        name = '%20'
      } 
      this.url = '/books/' + id + '/' + name + '/';
      this.fetch();
      console.log("BookCollection setParams end <<<");
    },
  });
  return {
      "BookCollection": BookCollection
  };
});