var CommentForm = React.createClass({
  render: function() {
    return (
      <form className="form-inline" role="form">
       <div className="form-group">
        <input className="form-control" type="text" placeholder="Your comments"/>
       </div>
      <div className="form-group">
       <input type="submit" className="btn btn-default" value="Add" />
      </div>
      </form>
    );
  }
});