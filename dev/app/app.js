define(function(require) {

  var Backbone = require('backbone'),
      Cats = require('widgets/cats'),
      Dogs = require('widgets/dogs');

  console.log(Backbone);

  var Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'index': 'index',
      'cats': 'showCats',
      'dogs': 'showDogs'
    },

    index: function() {
      $('body').empty();
    },

    showCats: function() {
      console.log('cats');
      var cats = new Cats();
      cats.show();
    },
      showDogs: function() {
      console.log('dogs');
      var dogs = new Dogs();
      dogs.show();
    }
  });

  var r = new Router();
  Backbone.history.start();

});
