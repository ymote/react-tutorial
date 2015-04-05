The key to dynamic updates is the call to this.setState() after receiving new data, and the UI automatically updates itself. 

Because of this reactivity, it is only a minor change to add live updates. We will use simple polling here but you could easily 
use WebSockets or other technologies.

### Polling for Live Update

We move the AJAX call to a separate method `loadCommentsFromServer` and called it in `componentDidMount`.

To add simple polling, we set a polling interval as attribute `pollInterval` in `CommentBox`. In the component, we can access its value through 
`this.prop.pollInterval`. 

Then we can use `setInterval` method in Javascript

```js
setInterval(function,milliseconds)
```

to call `loadCommentsFromServer` method every `pollInterval` milliseconds in the `componentDidMount`.








