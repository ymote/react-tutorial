Now we have basic structure of our comment box ready. We focus on how to render a single commment.

### Using props

The look of a comment is not terribly exciting. More importantly, the Comment component, which will depend on data passed in from it's parent (`CommentList`). 
Data passed in from a parent component is available as a 'property' on the child component. These 'properties' are accessed through **this.props**. 


Assume we have a comment component as follows,

```js
  <div className="commentText">
    <p>{this.props.children}</p> 
    <span className="date sub-text">by {this.props.author}</span>
  </div> 
```

It expects `this.props.author` and `this.props.chidren` passed in from parent. `{ }` is used to render these expression to HTML.

> We access named attributes passed to the component as keys on this.props and any nested elements as this.props.children.

To use Comment in CommentList component:

```js
  <Comment author="Pete Hunt">This is one comment</Comment>
```

The `author` is an attribute passed in, in this case -- Peter Hunt. `children` is used to access the content in the element. 
It is `This is one comment`.

### Children

You can include additional React components or JavaScript expressions between the opening and closing tags like this:

```js
<Parent><Child /></Parent>
```

Parent can read its children by accessing the special **this.props.children** prop.


### Ownership

In React, an owner is the component that sets the props of other components. In our case, `Comment` is owned by `CommentList`.

A component **cannot mutate its props** — they are always consistent with what its owner sets them to. This key property leads to UIs that are guaranteed to be consistent.

The `Comment` component can not change its author and text. It only renders a comment to HTML.


