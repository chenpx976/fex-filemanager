'use strict';

var React = require('react/addons');


var Modal = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},
  handleForm: function (e) {
    e.preventDefault();
    if (!this.refs.folderName.getDOMNode().value) {
      return;
    }
    var folderPath = this.props.folderPath.trim();
    console.log(folderPath);
    var prefix =  (folderPath=='') ? '' : folderPath + '/';
    var newFolder = {
      folderName:  prefix + this.refs.folderName.getDOMNode().value,
    };
    this.refs.addModal.getDOMNode().reset();
    this.props.onNewFolder(newFolder);
  },
  render: function () {
    var styleObj = {
      display: this.props.formDisplayed ? 'block' : 'none'
    };
    return (
        <div className="Modal" style={ styleObj }>
        <form ref="addModal" name="addFolder" className="clearfix" onSubmit={this.handleForm} >
          <div className="form-group">
            <label htmlFor="qtitle">文件夹名</label>
            <input ref="folderName" type="text" className="form-control" id="qtitle" placeholder="文件夹名" />
          </div>
          <button type="submit" className="btn btn-success pull-right">确认</button>
          <button onClick={this.props.onToggleForm} className="btn btn-default pull-right">取消</button>
        </form>
        </div>
      );
  }
});

module.exports = Modal;
