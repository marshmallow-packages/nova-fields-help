let mix = require("laravel-mix");
require("mix-tailwindcss");

let NovaExtension = require("laravel-nova-devtool");

mix.extend("nova", new NovaExtension());

mix.setPublicPath("dist")
    .js("resources/js/field.js", "js")
    .vue({ version: 3 })
    .css("resources/css/field.css", "css")
    .tailwind()
    .nova("marshmallow/nova-fields-help");
