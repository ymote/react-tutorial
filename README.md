In the next two exercises, we will replace the hard-coded data with some dynamic data from the server. 
We will remove the data prop and replace it with a URL to fetch JSON data. 

We put comments in ***_comments.json*** and use ajax to load data from the json file.

Now the `CommentBox` has an attribute `url`,

```js
<CommentBox url="_comments.json" />
```

It is different from the prior components because it will have to re-render itself. The component won't have any data until 
the request from the server comes back, at which point the component may need to render some new comments.

### Reactive state

So far, each component has rendered itself once based on its props. **props are immutable**: they are passed from the parent and are "owned" by the parent. 

To implement interactions, we introduce mutable state to the component. `this.state` is private to the component and can be changed 
by calling **this.setState()**. 

> When the state is updated, the component re-renders itself.

We add `getInitialState` method in `CommentBox`.

```js
getInitialState: function() {
  return {data: []};
}
```
> getInitialState() executes exactly once during the lifecycle of the component and sets up the initial state of the component.

To start with, the data is an empty array, meaning we have not fetched data.

### Component lifecycle

Various methods are executed at specific points in a component's <a href="https://facebook.github.io/react/docs/component-specs.html" target="_blank">lifecycle</a>. 
In our case, we want the `CommentBox` to fetch comments after it is rendered onto view. So we use the `componentDidMount` method.

> componentDidMount Invoked once, immediately after the initial rendering occurs. If you want to send AJAX requests, perform those operations in this method.

In this exercise, we will put the hard-coded data in the `componentDidMount` method. In the next one, we will change it to use **AJAX** to fetch data from server.  







