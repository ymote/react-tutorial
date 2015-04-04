Let's build skeletons for CommentList and CommentForm in this exercise. Remember our comment box structure:

```js
- CommentBox
  - CommentList
    - Comment
  - CommentForm
```

### Refactor

Let's put our javascript code into a seperate file ***app.js*** and clean up ***index.html***. Now in ***index.html***,
we use the `<script>` tag to reference ***app.js***in `<body>`, we still need to declare the type of script as `jsx`.

### Composing components

This is the place we begin to understand React's idea of component hierarchy.

The `CommentBox` is the main component and it contains two other components -- `CommentList` and `CommentForm`. 

Each component is created by `React.createClass` API method. Each component has a `render` method, which renders itself to HTML. 
Right now in these two components, they are only simple `<div>` elements.

`CommentBox` is the mixing of HTML tags and the two new components.  

### Separation of Concerns

We use `CommentList` to show all the comments, and use `CommentForm` to add new comment. Both compoents 
only need to focus on their own logic and view presentation. 

> By building modular components that reuse other components with well-defined interfaces,
you get much of the same benefits that you get by using functions or classes. Specifically you can separate the different 
concerns of your app simply by building new components. 


