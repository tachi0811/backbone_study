
define(["jquery",
  "underscore", 
  "backbone"], 
function($, _, Backbone) {
  var BookModel = Backbone.Model.extend({
    urlRoot: '/books/',
    initialize: function() {
      console.log("book model initialize");
      this.on('change', function() {
        if (this.hasChanged('id')) {
          urlRoot = '/books/' + this.id;
        }
      })
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