var React = require('react');
var Modal = require('./Modal.js');
var FileItem = React.createClass({
	getInitialState: function() {
		return {
			editState: false
		};
	},
	handleDoubleClick: function () {
		this.props.handleDoubleClick(this.props.data.fileName);
	},
	handleDelte: function () {
		this.props.handleDelte({fileName:this.props.data.fileName});
	},
	handleEdit: function (e) {
		e.preventDefault();
		this.setState({
			editState: !this.state.editState
		});
	},
	onModalSubmit: function (elem) {
		this.props.handleMove({oldFile:this.props.data.fileName, newFile: elem.folderName});
		this.setState({
			editState: !this.state.editState
		});
	},
	render: function() {
		var simpleName = this.props.data.simpleName;
		var fileName = this.props.data.fileName;
		var editState = this.state.editState;
		if (editState) {
			var tpl = <Modal onModalSubmit={this.onModalSubmit} onToggleForm={this.handleEdit} folderPath={this.props.filePath} formDisplayed={this.state.editState}  fileName={fileName} simpleName={simpleName} />;
		} else{
			var tpl = <a onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>{simpleName}</a>
		}
		return (
			<tr>
							<td><span className="glyphicon glyphicon-file" aria-hidden="true"></span></td>
							<td>{tpl}</td>
							<td>
								<a href="#" onClick={this.handleDelte} ><span className="glyphicon glyphicon-trash"></span></a>
								<a href="#" onClick={this.handleEdit}><span className="glyphicon glyphicon-pencil"></span></a>
								<a href="#" onClick={this.handleMove}><span className="glyphicon glyphicon-move"></span></a>
							</td>
			</tr>

		);
	}

});

module.exports = FileItem;
