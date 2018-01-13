
define(["libs/jquery.min" ,"libs/underscore-min", "libs/backbone-min"], function($, _, Backbone) {
  var BookCollection = Backbone.Collection.extend({
    url: '/books/',
    initialize: function() {
      console.log("book model initialize");
    },
  });
  return {
      "BookCollection": BookCollection
  };
});