var React = require('react');
var Breadcrumb = React.createClass({
	handleClick: function (elem) {
		this.props.handleClick(elem);
	},
	render: function() {
		var path = this.props.path;
		var currentLink = "";
		var paths = path.split('/').map(function(elem, index) {
			if (elem === '') {
				return false;
			}
			currentLink += '/' + elem;
			return <li onClick={this.handleClick.bind(this, currentLink)} className="">{elem}</li>;
		}.bind(this))
		// var links = this.props.links;
		// var olLi = links.map(function(elem, index) {
		// 	// var simpleName = elem.split('/').pop();
		// 	if (index< links.length - 1) {
		// 		return <li onClick={this.handleClick.bind(this, elem)} className="">{elem}</li>;
		// 	}else {
		// 		return <li className="active" >{elem}</li>;
		// 	}
		// }.bind(this));
		return (
			<div className="row">
				<ol className="breadcrumb">
					<li>
						<a onClick={this.handleClick.bind(this, '')}><span className="glyphicon glyphicon-home"></span>Home</a>
					</li>
						{paths}
				</ol>
			</div>
		);
	}

});

module.exports = Breadcrumb;
