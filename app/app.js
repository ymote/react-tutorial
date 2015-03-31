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

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        //add Comment Component Here
        //add Comment Component Here
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
