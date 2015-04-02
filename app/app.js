var converter = new Showdown.converter();

var Comment = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <li>
        <div className="commentText">
          <p className="" dangerouslySetInnerHTML={{__html: rawMarkup}}></p>
          <span className="date sub-text">by {this.props.author}</span>
        </div>      
      </li>      
    );
  }
});

//Dynamically build comment nodes, which is an array of comment components
var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });    
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = "me";
    var text = this.refs.text.getDOMNode().value.trim();
    if (!text) {
      return;
    }
    //set input DOM element's value property to empty string to clear value
  },  
  render: function() {
    return (
      <form className="form-inline" role="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Your comments" ref="text" />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-default" value="Add" />
        </div>
      </form> 
    );
  }
});

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },  
  getInitialState: function() {
    return {data: {content:"", comments: []}};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },  
  render: function() {
    return (
      <div className="detailBox">
        <div className="titleBox">
          <label>Comment Box</label>
          <button type="button" className="close" aria-hidden="true">&times;</button>
        </div>
        <div className="commentBox">
          <p className="taskDescription">{this.state.data.content}</p>
        </div>
        <div className="actionBox">
          <CommentList data={this.state.data.comments}/>
          <CommentForm />
        </div>
      </div>
    );
  }
});

//the url to fetch data is injected to root CommentBox component as an attribute
React.render(
  <CommentBox url="_comments.json" pollInterval={60000}/>,
  document.getElementById('content')
);
