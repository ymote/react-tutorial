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

The `CommentBox` is the main component and it is made of two other component -- `CommentList` and `CommentForm`. 

Each component is created by `React.createClass`. The `render` method in each component render itself to HTML. 

`CommentBox` is the mixing of HTML tags and the two components defined earlier.  

### Separation of Concerns

We expect `CommentList` is to show all the comments and `CommentForm` is where we add new comment. By seperating them, each compoent 
just need to focus on its own functionality. 


> By building modular components that reuse other components with well-defined interfaces, (`CommentBox` resue `CommentList` and `CommentForm`)
you get much of the same benefits that you get by using functions or classes. Specifically you can separate the different 
concerns of your app simply by building new components. 


