var React = require('react/addons');
var Breadcrumb = require('./Breadcrumb.js');
var Modal = require('./Modal.js');
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
	onNewFolder: function (elem) {
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
	handleDelte: function (elem) {
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
		}.bind(this))
		.fail(function() {
		  console.log("error");
		})
		.always(function() {
		  console.log("complete");
		});
	},
	handleEdit: function (elem) {

	},
	handleMove: function (elem) {

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
	render: function() {
		var data = this.state.data;
		console.log('重新renderpath', this.state)
		var folders = data['directories'].map(function(elem,index) {
			var simpleName = elem.split('/').pop();
			return <tr key={index}>
				<td><span className="glyphicon glyphicon-folder-close" aria-hidden="true"></span></td>
				<td><a onClick={this.folderClick.bind(this, elem)}>{simpleName}</a></td>
				<td>
					<a href="#" onClick={this.handleDelte.bind(this, {folderName: elem})} ><span className="glyphicon glyphicon-trash"></span></a>
					<a href="#" onClick={this.handleEdit.bind(this, {folderName: elem})}><span className="glyphicon glyphicon-pencil"></span></a>
					<a href="#" onClick={this.handleMove.bind(this, {folderName: elem})}><span className="glyphicon glyphicon-move"></span></a>
				</td>
			</tr>
		}.bind(this));
		var files = data['files'].map(function(elem,index) {
			return <tr key={index}>
				<td><span className="glyphicon glyphicon-file" aria-hidden="true"></span></td>
				<td><a href="#">{elem}</a></td>
				<td>
					<a href="#"><span className="glyphicon glyphicon-trash"></span></a>
					<a href="#"><span className="glyphicon glyphicon-pencil"></span></a>
					<a href="#"><span className="glyphicon glyphicon-move"></span></a>
				</td>
			</tr>
		}.bind(this));
		// var tableData = data.each(function(index, el) {
		// 	console.log(index, el);
		// });
		return (
			<div className="container">
				<Breadcrumb links={this.state.links} path={this.state.path} handleClick={this.folderClick} />
				<div className="row">
						<button type="button" className="btn btn-default"><span className="glyphicon glyphicon-cloud-upload"></span>上传</button>
						<button type="button" onClick={this.onToggleForm} className="btn btn-default"><span className="glyphicon glyphicon-folder-open"></span>创建文件夹</button>
				</div>
				<Modal onNewFolder={this.onNewFolder} onToggleForm={this.onToggleForm} folderPath={this.state.path} formDisplayed={this.state.formDisplayed} />
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
