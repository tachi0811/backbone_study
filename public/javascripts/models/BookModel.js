
define(["libs/jquery.min" ,"libs/underscore-min", "libs/backbone-min"], function($, _, Backbone) {
  var BookModel = Backbone.Model.extend({
    initialize: function() {
      console.log("book model initialize");
    },
    defaults: {
      id: null,
       name: 'Book Name',
    }
  });
  return {
      "BookModel": BookModel
  };
});