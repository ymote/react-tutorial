var Comment = React.createClass({
  render: function() {
    return (
       
         
            
           
              
             
    );
  }
});
@@@
prompt: Comment Component
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 3:6
type: <li>
moveTo: 8:6
type: </li>
moveTo: 4:8
type: <div className="commentText">
moveTo: 7:8
type: </div>
moveTo: 5:10
type: <p>{this.props.children}</p>
tooltip: this.props contain data passed in from Parent Component, children is used to access the content in the element.
moveTo: 6:10
type: <span className="date sub-text">by {this.props.author}</span>
tooltip: Show the author attribute
moveTo: 11:3
tooltip: { text: "Usage: \"<Comment author='me'>This is content</Comment>\". The p tag will have 'This is content', and the span tag will have 'by me'", wait: 8000}
prompt: Comment is complete