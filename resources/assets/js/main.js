var _ = require('underscore');
window.$ = window.jQuery = require('jquery');
$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr("content")
  }
});
var React = require('react');
var Header = require('./Header.js');
var Container = require('./Container.js');
var React = require('react');

var Main = React.createClass({

	render: function() {
		return (
			<div className="main">
				<Header />
				<Container />
			</div>
		);
	}

});



React.render(<Main />, document.getElementsByTagName('body')[0]);

