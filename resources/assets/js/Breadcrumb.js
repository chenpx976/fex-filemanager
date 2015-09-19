var React = require('react/addons');
var Breadcrumb = React.createClass({
	handleClick: function (elem) {
		this.props.handleClick(elem);
	},
	render: function() {
		var links = this.props.links.map(function(elem, index) {
			return <li onClick={this.handleClick.bind(this, elem)} className="">{elem}</li>;
		}.bind(this));
		return (
			<div className="row">
				<ol className="breadcrumb">
					<li>
						<a href=""><span className="glyphicon glyphicon-home"></span>Home</a>
					</li>
						{links}
				</ol>
			</div>
		);
	}

});

module.exports = Breadcrumb;
