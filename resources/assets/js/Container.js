var React = require('react/addons');
var Breadcrumb = require('./Breadcrumb.js');
var Modal = require('./Modal.js');
var FolderItem = require('./FolderItem.js');
var FileItem = require('./FileItem.js');
var Upload = require('./Upload.js');
var Container = React.createClass({
	getInitialState: function() {
	  return {
	  	data:{
	  		directories: [],
	  		files: []
	  	},
	  	links: [],
	  	path: ''
	  };
	},
	onToggleForm: function (e) {
	  e.preventDefault();
	  this.setState({
	    formDisplayed: !this.state.formDisplayed
	  });
	},
	onModalSubmit: function (elem) {
		console.log(elem);
		  $.ajax({
		    url: 'api/manager/post/directory',
		    type: 'POST',
		    data: elem,
		  })
		  .done(function(dataJson) {
		    console.log("success:", dataJson);
		    if (dataJson.status) {
		    	var datas = this.state.data;
		    	datas['directories'].push(elem.folderName);
		    	this.setState({
		    		data: datas,
		    		formDisplayed: !this.state.formDisplayed
		    	});

		    };
		  }.bind(this))
		  .fail(function() {
		    console.log("error");
		  })
		  .always(function() {
		    console.log("complete");
		  });
	},
	handleFolderDelte: function (elem) {
		console.log(elem);
		$.ajax({
		  url: 'api/manager/delete/directory',
		  type: 'POST',
		  data: elem,
		})
		.done(function(dataJson) {
		  console.log("success:", dataJson);
		  if (dataJson.status) {
		  	var datas = this.state.data;
		  	var key = datas['directories'].indexOf(elem.folderName);
		  	if (key > -1) {
		  		datas['directories'].splice(key,1);
		  		this.setState({
		  			data: datas
		  		});
		  	}else{
		  		console.log(key,folderName,datas['directories']);

		  	}
		  };
		}.bind(this));
	},
	handleFileDelte: function (elem) {
		console.log(elem);
		$.ajax({
		  url: 'api/manager/delete/file',
		  type: 'POST',
		  data: elem,
		})
		.done(function(dataJson) {
		  console.log("success:", dataJson);
		  if (dataJson.status) {
		  	var datas = this.state.data;
		  	var key = datas['files'].indexOf(elem.fileName);
		  	if (key > -1) {
		  		datas['files'].splice(key,1);
		  		this.setState({
		  			data: datas
		  		});
		  	}else{
		  		console.log(key,fileName,datas['directories']);

		  	}
		  };
		}.bind(this));
	},
	handleFolderMove: function (elem) {
		console.log(elem);
		$.ajax({
		  url: 'api/manager/put/directory',
		  type: 'POST',
		  data: elem,
		})
		.done(function(dataJson) {
		  console.log("success:", dataJson);
		  if (dataJson.status) {
		  	var datas = this.state.data;
		  	var key = datas['directories'].indexOf(elem.oldFolder);
		  	if (key > -1) {
		  		datas['directories'][key] = elem.newFolderName;
		  		this.setState({
		  			data: datas
		  		});
		  	}else{
		  		console.log(key,folderName,datas['directories']);

		  	}
		  };
		}.bind(this));
	},
	handleFileMove: function (elem) {
		console.log(elem);
		$.ajax({
		  url: 'api/manager/put/file',
		  type: 'POST',
		  data: elem,
		})
		.done(function(dataJson) {
		  console.log("success:", dataJson);
		  if (dataJson.status) {
		  	var datas = this.state.data;
		  	var key = datas['files'].indexOf(elem.oldFile);
		  	if (key > -1) {
		  		datas['files'][key] = elem.newFile;
		  		this.setState({
		  			data: datas
		  		});
		  	}else{
		  		console.log(key,folderName,datas['files']);

		  	}
		  };
		}.bind(this));
	},
	componentDidMount: function() {
		$.ajax({
		  url: 'api/path/',
		  dataType: 'json',
		  success: function(data) {
		    this.setState({
		    	data: data.data,
		    	path: data.path,
		    	links: data.links,
		    	formDisplayed: false
		    });
		    console.log("数据已经改变");
		  }.bind(this)
		});
	},
	folderClick: function (elem) {
		console.dir('点击事件',elem);
		this.setState({
			path: elem
		});
		$.ajax({
		  url: 'api/path/' + elem,
		  dataType: 'json',
		  success: function(data) {
		    this.setState({
		    	data: data.data,
		    	path: data.path,
		    	links: data.links
		    });
		    console.log("数据已经改变");
		  }.bind(this)
		});
	},
	onUpload: function (fd) {
		fd.append('path',this.state.path);
		$.ajax({
		  url: 'api/manager/post/file',
		  type: 'POST',
		  data: fd,
		  processData: false,
		  contentType: false,
		})
		.done(function(dataJson) {
		  console.log("success:", dataJson);
		  if (dataJson.status) {
		  	var datas = this.state.data;
		  	datas['files'].push(dataJson.fileName);
		  	this.setState({
		  		data: datas
		  	});

		  };
		}.bind(this));
	},
	render: function() {
		var data = this.state.data;
		console.log('重新', this.state)
		var folders = data['directories'].map(function(elem,index) {
			var simpleName = elem.split('/').pop();
			var data = {simpleName:simpleName,folderName:elem};
			return <FolderItem handleDelte={this.handleFolderDelte} handleMove={this.handleFolderMove}  handleDoubleClick={this.folderClick}  folderPath={this.state.path}  data={data}  />;
		}.bind(this));
		var files = data['files'].map(function(elem,index) {
			var simpleName = elem.split('/').pop();
			var data = {simpleName:simpleName,fileName:elem};
			return <FileItem handleDelte={this.handleFileDelte} handleMove={this.handleFileMove}  handleDoubleClick={this.folderClick}  filePath={this.state.path}  data={data}  />;
		}.bind(this));
		// var tableData = data.each(function(index, el) {
		// 	console.log(index, el);
		// });
		return (
			<div className="container">
				<Breadcrumb links={this.state.links} path={this.state.path} handleClick={this.folderClick} />
				<div className="row">
						<Upload handleUpload={this.onUpload}  />
						<button type="button" onClick={this.onToggleForm} className="btn btn-default"><span className="glyphicon glyphicon-folder-open"></span>创建文件夹</button>
				</div>
				<Modal onModalSubmit={this.onModalSubmit} onToggleForm={this.onToggleForm} folderPath={this.state.path} formDisplayed={this.state.formDisplayed} />
				<div className="row">
					<table className="table table-bordered table-hover">
						<thead>
							<tr>
								<th style={{width: 1 + 'em'}}>type</th>
								<th>name</th>
								<th>action</th>
							</tr>
						</thead>
						<tbody>
							{folders}
							{files}
						</tbody>
					</table>
				</div>
			</div>
		);
	}

});

module.exports = Container;
