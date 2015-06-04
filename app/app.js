var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="detailBox">
       <div className="titleBox">
        <label>Comment Box</label>
         <button type="button" className="close" aria-hidden="true">&times;</button>
      </div>
      <div className="commentBox">
        Hello, world! I am a CommentBox. 
      </div>
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);