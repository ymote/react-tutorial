/* CommentBox Component*/
 
   
     
       
          
       
     
   
 

 
   
   
 
/* end CommentBox */
@@@
prompt: Let's code CommentBox
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 1:0
type: var CommentBox = React.createClass({
tooltip: {text: "Create a component class -- CommentBox"}
moveTo:2:2
type: render: function() {
tooltip: {text: "Render method is required, it return a single child element -- a virtual representation of a native DOM component"}
moveTo: 3:4
type: return (
moveTo: 4:6
type: <div className="commentBox">
tooltip: {text: "This is plain HTML. Notice 'className' is the name of CSS class applied to the div"}
moveTo: 5:8
type: Hello, world! I am a CommentBox.
moveTo: 6:6
type: </div>
moveTo: 7:4
type: );
moveTo: 8:2
type: }
tooltip: {text: "Created the DOM element to show on page for the CommentBox"}
moveTo: 9:0
type: });
tooltip: {text: "Right now CommentBox is a static component, so only render method is required"}
moveTo: 11:0
type: React.render(
moveTo: 12:2
type: <CommentBox />,
moveTo: 13:2
type: document.getElementById('content')
moveTo: 14:0
type: );
tooltip: {text: "React.render renders a ReactElement into the DOM in the supplied container. The ReactElement is the CommentBox created before, and the container is the div#content in index.html", wait:8000}
