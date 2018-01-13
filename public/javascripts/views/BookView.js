define(["libs/jquery.min" ,"libs/underscore-min", "libs/backbone-min"], function($, _, Backbone) {
  var BookView = Backbone.View.extend({
    initialize: function() {
      console.log('book view initialize');
      this.render();
    },
    render: function() {
      this.$el.html('book view');


      
      return this;
    }
  });
  return {
      "BookView": BookView
  };
});