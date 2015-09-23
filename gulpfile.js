var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.less('app.less');
    mix.browserify('main.js');
});
