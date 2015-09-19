var React = require('react/addons');
var Breadcrumb = require('./Breadcrumb.js');
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
	updateFloder: function () {
		$.ajax({
		  url: 'api/path/' + this.state.path,
		  dataType: 'json',
		  success: function(data) {
		    this.setState({
		    	data: data.data,
		    	links: data.links,
		    	path: data.path
		    });
		  }.bind(this),
		  error: function(xhr, status, err) {
		    console.error(this.state.path, status, err.toString());
		  }.bind(this)
		});
	},
	componentDidMount: function() {
		$.ajax({
		  url: 'api/path/' + this.state.path,
		  dataType: 'json',
		  success: function(data) {
		    this.setState({
		    	data: data.data,
		    	links: data.links,
		    	path: data.path
		    });
		  }.bind(this),
		  error: function(xhr, status, err) {
		    console.error(this.state.path, status, err.toString());
		  }.bind(this)
		});
	},
	floderClick: function (elem) {
		console.dir(elem);
		this.setState({
			path: elem
		});
		this.componentDidMount();
	},
	render: function() {
		var data = this.state.data;
		// console.log('data:', data);
		console.log('path', this.state)
		// $.each(data, function(index, val) {

		// 	console.log(index,val);
		// });
		var floders = data['directories'].map(function(elem,index) {
			return <tr key={index}>
				<td><span className="glyphicon glyphicon-folder-close" aria-hidden="true"></span></td>
				<td><a onClick={this.floderClick.bind(this, elem)}>{elem}</a></td>
				<td>
					<a href="#"><span className="glyphicon glyphicon-trash"></span></a>
					<a href="#"><span className="glyphicon glyphicon-pencil"></span></a>
					<a href="#"><span className="glyphicon glyphicon-move"></span></a>
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
				<Breadcrumb links={this.state.links} handleClick={this.floderClick} />
				<div className="row">
						<button type="button" className="btn btn-default"><span className="glyphicon glyphicon-cloud-upload"></span>上传</button>
						<button type="button" data-toggle="modal" href='#createFloder' className="btn btn-default"><span className="glyphicon glyphicon-folder-open"></span>创建文件夹</button>
				</div>
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
							{floders}
							{files}
						</tbody>
					</table>
				</div>
			</div>
		);
	}

});

module.exports = Container;
