var Comment = React.createClass({
  render: function() {
    return (
      <li>
        <div className="commentText">
          <p>{this.props.children}</p> 
          <span className="date sub-text">by {this.props.author}</span>
        </div>      
      </li>      
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
          <Comment author="Pete Hunt">This is one comment</Comment>
          <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="detailBox">
        <div className="titleBox">
          <label>Comment Box</label>
          <button type="button" className="close" aria-hidden="true">&times;</button>
        </div>
        <div className="commentBox">
          <p className="taskDescription">Hello, world! I am a post.</p>
        </div>
        <div className="actionBox">
          <CommentList />
          <CommentForm />
        </div>
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
