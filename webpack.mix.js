let mix = require("laravel-mix");

mix
  .js("main.js", "dist")
//   .setPublicPath("dist")
  .sass("scss/style.scss", "dist/style.css");