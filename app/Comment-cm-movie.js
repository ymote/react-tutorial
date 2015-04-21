/* use the Showdown converter */
 

var Comment = React.createClass({
  render: function() {
     
     
    return (
      <li>
        <div className="commentText">
           
          <span className="date sub-text">by {this.props.author}</span>
        </div>      
      </li>      
    );
  }
});
@@@
prompt: Comment Component
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
run: {command: "undo"}
moveTo: 1:0
type: var converter = new Showdown.converter();
tooltip: Create a new Showdown converter to convert Markdown text to HTML
moveTo: 5:6
type: var rawMarkup = converter.makeHtml(this.props.children.toString());
tooltip: Use the makeHtml method to convert the content in Comment (this.props.children) from Markdown to HTML
moveTo: 6:6
type: var author = converter.makeHtml('by '+this.props.author);
tooltip: Convert author info from Markdown to HTML
moveTo: 10:10
type: <p className="" dangerouslySetInnerHTML={{__html: rawMarkup}}></p>
tooltip: By defautl, React treacts HTML tag as plain string. To properly render text as HTML, there is a special API -- dangerouslySetInnerHTML.
prompt: Added Markdown