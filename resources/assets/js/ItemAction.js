var React = require('react');

var ItemAction = React.createClass({

	render: function() {
		return (
			<div className="ItemAction">
				<a href="#" onClick={this.props.handleDelte} ><span className="glyphicon glyphicon-trash"></span></a>
				<a href="#" onClick={this.props.handleEdit}><span className="glyphicon glyphicon-pencil"></span></a>
			</div>
		);
	}

});

module.exports = ItemAction;
