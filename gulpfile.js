var elixir = require('laravel-elixir');
elixir.config.jsOutput = 'public/assets/js';
elixir.config.cssOutput = 'public/assets/css';

elixir(function(mix) {
	mix.less('app.less', 'public/assets/css');

	mix.browserify('main.js', 'public/assets/js');
});
