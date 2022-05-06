let mix = require("laravel-mix");
require("./mix");

mix.setPublicPath("./")
    .js("resources/js/field.js", "dist/js")
    .sass("resources/sass/field.scss", "dist/css")
    .vue({ version: 3 })
    .nova("marshmallow/nova-fields-help");
