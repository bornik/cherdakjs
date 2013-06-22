define(function (require) {
    var Backbone = require('backbone'),
        tpl = require('text!./templates/cv.html'),
        _ = require('underscore'),
        View = require('./item_view');

    console.log(tpl);

    return Backbone.View.extend({
        el: 'body',
        tagName: 'ul',
        template: _.template(tpl),

        render: function () {
            this.$el.html(this.template());
        },

        initialize: function (collection) {
            this.render();
            collection.each(function (model) {
                var view = new View({
                    model: model
                });
                view.render();

                this.$el.append(view.$el);
            }, this);
        }
    });
});