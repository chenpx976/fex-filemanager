var _ = require('underscore');
window.$ = window.jQuery = require('jquery');
require('../../../node_modules/bootstrap/dist/js/npm.js');

$(function() {
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr("content")
    }
  });
  function insertFloder (floderName) {
    var mainData = $('#mainData');
    var tpl = $('#tpl').html();
    var context = {floderName:floderName};
    var html = _.template(tpl)(context);
    mainData.prepend(html);
  }
  function createFloder() {

        $( "form" ).on( "submit", function( event ) {
          event.preventDefault();

          var formData = $( this ).serialize();
          $.ajax({
            url: '/manager/post/directory',
            type: 'POST',
            data: formData,
          })
          .done(function(data) {
            console.log("success:", data);
            if (data.status) {
              insertFloder(data.floderName);
            };
          })
          .fail(function() {
            console.log("error");
          })
          .always(function() {
            console.log("complete");
          });
        });
  }
  createFloder();
})
