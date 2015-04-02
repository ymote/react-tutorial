Now it's time to build the form. Our CommentForm component should ask the user for their name and comment text and 
send a request to the server to save the comment.

The new `<form>` is inside the `render` methdo of `CommentForm` component.

Let's make the form interactive. When the user submits the form, we should clear it, submit a request to the server, 
and refresh the list of comments. 

The `handleSubmit` method listens for the form's submit event and clear it.

### Events

React attaches event handlers to components using a camelCase naming convention. We attach an **onSubmit** handler 
to the form's submit event.

In the `handleSubmit` handler, first use `preventDefault()` on the event to prevent the browser's default action of submitting the form. 
This is a common case if you are using javascript to handler form submission.

### Refs

We need to grab user input values from the `<input>`s in the `render` method.

> In React, what returned from render() is not actual rendered children instances. It is merely a description of the children instances 
in your component's sub-hierarchy at a particular moment in time.

Basically it means we can not grab the `<input>` returned from render().

To solve this, React supports a special property -- **this.refs** that we can attach to any component that is output from render(). 

Here we use the ref attribute to assign names to `<input>`s. Then we can use **this.refs** to reference `<input>` components. 
We can call `React.findDOMNode(component)` on a component to get the native browser DOM element.

We can use the DOM element's value property to get user input.

### Where to use refs

Refs are a great way to send a message to a particular child instance (here `<input>`) in a way that would be inconvenient to do via 
streaming Reactive props and state. 

They should, however, not be your go-to abstraction for flowing data through your application.

Performing DOM measurements almost always requires reaching out to a "native" component such as `<input />` and accessing 
its underlying DOM node via `React.findDOMNode(this.refs.myInput)`. Refs are one of the only practical ways of doing this reliably.








