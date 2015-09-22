var $ = require('jquery');
var React = require('react');
var Upload = React.createClass({
	getInitialState: function() {
	  return {
	    data_uri: null,
	  };
	},
	handleSubmit: function (event) {
		event.preventDefault();
	},
	handleFile: function (e) {
		var files = e.target.files[0];
		var fd = new FormData();
		fd.append( 'file', this.refs.file.getDOMNode().files[0] );
		console.log(FormData);
		this.refs.Upload.getDOMNode().reset();
		this.props.handleUpload(fd);
	},
	render: function() {
		return (
			<div className="Upload">
			<form ref="Upload" onSubmit={this.handleSubmit} encType="multipart/form-data" name="Upload" >
				<button htmlFor="file" className="upload-text btn btn-default glyphicon glyphicon-cloud-upload">上传<input type="file"  ref="file" onChange={this.handleFile}  className="file-btn btn btn-default"></input></button>
			</form>
			</div>
		);
	}

});

module.exports = Upload;
