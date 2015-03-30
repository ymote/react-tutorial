### Hello World

Let's look at the sample _hello world_ app in React.

 `<script type="text/jsx">`

If you go through our Angular courses, you know it is some sort of template language embeded in `<script>` tag, like `ng-template`. 
Here the language is **JSX**.

### JSX

From react website: 

> JSX is a JavaScript syntax extension that looks similar to XML. You can use a simple JSX syntactic transform with React.

Essentially, we are writing code in a syntax similar to Javascript, and React helps us to transfer it to the JS browser can understand. 
That's the reason why we include `<script src="lib/JSXTransformer.js"></script>` in header, for the transformation.

To further understand this syntax, you can check out <a href="https://facebook.github.io/react/docs/jsx-in-depth.html" target="_blank">JSX doc</a>.

### React.render

> Render a ReactElement into the DOM in the supplied container and return a reference to the component.

On line 12, we create a DOM element `<h1>` containing "Hello, world!", and render it to a `<div>` with id `example`.

The `<div>` is declared on line 8, out of the `<script>` tag.


### What we know

We learn several things from this simple example. 

1. React impose us on a new syntax -- JSX. It is quite similar to JS and should be easier to use. We will see to it in this course.
2. Essentially we are creating a component, although quite simple. The component is self-contained and rendered to DOM. 

The way we have to write the HTML view (`<h1>`) in script is unconventional. It breaks the estabilished 
<a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank">MVC pattern</a>. React comes with several 
ground breaking ideas which likely to influence **all other** javascript frameworks.




