Now we have basic structure of our comment box ready. We focus on how to render a single comment with the `Comment` Component. 
The `ComponentList` component is made of a list of `Comment` components.

### Data flow

React is often used to build the **View** layer in an application. We can think of all comments are data coming from a backend server or 
a database. To maintain the maximum reusability, data fetching should occurs in the root `CommentBox` component. It then pass the data along 
to child components for rendering.

### Using props

To this end, the Comment component depends on data passed in from it's parent (`CommentList`) to render its view. 
Data passed in from a parent component is available as a 'property' on the child component. These 'properties' are accessed through **this.props**. 

Assume we have a `Comment` component as follows,

```js
  <div className="commentText">
    <p>{this.props.children}</p> 
    <span className="date sub-text">by {this.props.author}</span>
  </div> 
```

It expects `this.props.author` and `this.props.chidren` passed in from parent. `{ }` is used to render these expression to HTML.

> We access named attributes passed to the component as keys on this.props and any nested elements as this.props.children.

To use `Comment` in `CommentList` component:

```js
  <Comment author="Pete Hunt">This is one comment</Comment>
```

The `author` is an attribute on the `Comment`, in this case -- _Peter Hunt_. `children` is used to access the content in the element. 
In this case it is _This is one comment_.

### Children

You can include additional React components or JavaScript expressions between the opening and closing tags like this:

```js
<Parent><Child /></Parent>
```

Parent can read its children by accessing the special **this.props.children** prop. The `<Child />` can be a component, DOM element or simple text.

### Ownership

In React, an owner is the component that sets the props of other components. In our case, `Comment` is owned by `CommentList`.

> A component **cannot mutate its props** — they are always consistent with what its owner sets them to. This key property leads to UIs that are guaranteed to be consistent.

The `Comment` component can not change its author and text. It only reads them and renders them to HTML.


