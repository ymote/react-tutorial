/* CommentBox Component*/
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
         
           
           
         
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
); 
/* end CommentBox */
@@@
prompt: Add List and Form
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 12:8
type: <div className="actionBox">
moveTo: 15:8
type: </div>
tooltip: Next add components inside the div
moveTo: 13:10
type: <CommentList />
tooltip: Add the CommentList React Component
moveTo: 14:10
type: <CommentForm />
tooltip: Add the CommentForm React Component
prompt: Next is CommentList