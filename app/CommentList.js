var CommentList = React.createClass({
  render: function() {
    return (
      <ul className="commentList">
      <Comment author="Pete Hunt">This is one comment</Comment>
      <Comment author="Jordan Walke">This is *another* comment</Comment>
      </ul>
    );
  }
});
