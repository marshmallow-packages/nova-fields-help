let mix = require("laravel-mix");
let path = require("path");

require("./mix");

mix.setPublicPath("dist")
    .sass("resources/js/field.scss", "css")
    .js("resources/js/field.js", "js")
    .vue({ version: 3 })
    .nova("marshmallow/nova-fields-help");
