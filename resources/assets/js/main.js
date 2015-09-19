var _ = require('underscore');
window.$ = window.jQuery = require('jquery');
require('../../../node_modules/bootstrap/dist/js/npm.js');

$(function() {
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr("content")
    }
  });

  function createFloder() {
  	$('#createFloder form').submit(function(event) {
  		event.preventDefault();

  	});
  }
})
