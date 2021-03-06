var React = require('react');
var Modal = require('./Modal.js');
var ItemAction = require('./ItemAction.js');
var FolderItem = React.createClass({
	getInitialState: function() {
		return {
			editState: false
		};
	},
	handleDoubleClick: function () {
		this.props.handleDoubleClick(this.props.data.folderName);
	},
	handleDelte: function () {
		this.props.handleDelte({folderName:this.props.data.folderName});
	},
	handleEdit: function (e) {
		e.preventDefault();
		this.setState({
			editState: !this.state.editState
		});
	},
	onModalSubmit: function (elem) {
		this.props.handleMove({oldFolder:this.props.data.folderName, newFolderName: elem.folderName});
		this.setState({
			editState: !this.state.editState
		});
	},
	handleMove: function () {

	},
	render: function() {
		var simpleName = this.props.data.simpleName;
		var folderName = this.props.data.folderName;
		var editState = this.state.editState;
		if (editState) {
			var tpl = <Modal onModalSubmit={this.onModalSubmit} onToggleForm={this.handleEdit} folderPath={this.props.folderPath} formDisplayed={this.state.editState}  folderName={folderName} simpleName={simpleName} />;
		} else{
			var tpl = <a onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>{simpleName}</a>
		}
		return (
			<tr>
							<td><span className="glyphicon glyphicon-folder-close" aria-hidden="true"></span></td>
							<td>{tpl}</td>
							<td>
								<ItemAction handleDelte={this.handleDelte} handleEdit={this.handleEdit} />
							</td>
			</tr>

		);
	}

});

module.exports = FolderItem;
