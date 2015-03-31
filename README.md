Let's build skeletons for CommentList and CommentForm in this exercise. Remember our comment box structure:

```
- CommentBox
  - CommentList
    - Comment
  - CommentForm
```

### Refactor

Let's put our javascript code into a seperate file ***app.js*** and clean up ***index.html***. Now in ***index.html***,
we use the `<script>` tag to reference ***app.js***, we still need to declare the type of script as `jsx`.

### Composing components

This is the place we begin to understand React is all about building components.

The `CommentBox` is the main component and it is made of two other components -- `CommentList` and `CommentForm`. 

Each component is created by `React.createClass`. The `render` method in each component render itself to HTML. Right now they 
are only simple `<div>s`.

`CommentBox` is the mixing of HTML tags and the two new components.  

### Separation of Concerns

We expect `CommentList` to show all the comments, and `CommentForm` is where we add new comment. Each compoent 
only need to focus on its own functionality. 

To this end, `CommentBox` can reuse these two components to provide comments.

> By building modular components that reuse other components with well-defined interfaces, (`CommentBox` resue `CommentList` and `CommentForm`)
you get much of the same benefits that you get by using functions or classes. Specifically you can separate the different 
concerns of your app simply by building new components. 


