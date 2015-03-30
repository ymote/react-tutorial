We'll be building a simple but realistic comments box that you can drop into a blog, a basic version of the realtime comments offered by Disqus, LiveFyre or Facebook comments.

We'll provide:

1. A view of all of the comments
2. A form to submit a comment
3. Hooks for you to provide a custom backend

### Your first component

React is all about modular, composable components. For our comment box example, we'll have the following component structure:

```
- CommentBox
  - CommentList
    - Comment
  - CommentForm
```

Let's build the `CommentBox` component, which is just a simple `<div>`.

#### JSX Syntax

The first thing you'll notice is the XML-ish syntax in your JavaScript. We have a simple precompiler that translates the syntactic sugar to this plain JavaScript:

```javascript
var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement('div', {className: "commentBox"},
        "Hello, world! I am a CommentBox."
      )
    );
  }
});
React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
```

Its use is optional but we've found JSX syntax easier to use than plain JavaScript. Read more on <a href="https://facebook.github.io/react/docs/jsx-in-depth.html" target="_blank">JSX Syntax article</a>.

### What's going on

We pass some methods in a JavaScript object to `React.createClass()` to create a new React component. The most important of these methods is called `render` 
which returns a tree of React components that will eventually render to HTML.

The `<div>` tags are not actual DOM nodes; they are instantiations of React `div` components. You can think of these as markers or pieces of data that React knows how to handle. 
React is **safe**. We are not generating HTML strings so XSS protection is the default.

You do not have to return basic HTML. You can return a tree of components that you (or someone else) built. This is what makes React **composable**: 
a key tenet of maintainable frontends.

`React.render()` instantiates the root component, starts the framework, and injects the markup into a raw DOM element, provided as the second argument.