define(function(require) {
  var Collection_view = require('./collection_view'),
      Collection = require('./collection');

  function Controller() {
  }

  Controller.prototype.show = function() {
      this.collection = new Collection([{name: 'belka'},{name: 'strelka'},{name: 'kosmos'}]);
      this.collection_view = new Collection_view(this.collection);
  }

  return Controller;
});
