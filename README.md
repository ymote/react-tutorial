Let's look at the sample _hello world_ app in React.

On line 9  `<script type="text/jsx">`

If you have went through our Angular courses, you know it is some sort of template language embeded in `<script>` tag (like `ng-template` in Angular). 
Here the language is **JSX**.

### JSX

From react website: 

> JSX is a JavaScript syntax extension that looks similar to XML. You can use a simple JSX syntactic transform with React.

**JSX lets you create JavaScript objects using HTML syntax.**. Essentially, we are still using **HTML** for view, but in the `<script>` tag.
React helps us to transfer it so browser can understand. That's the reason why we include `<script src="lib/JSXTransformer.js"></script>` in header, for the transformation.

To further understand this syntax, you can check out <a href="https://facebook.github.io/react/docs/jsx-in-depth.html" target="_blank">JSX doc</a>.

### React.render

> Render a ReactElement into the DOM in the supplied container and return a reference to the component.

On line 12, we create a DOM element `<h1>` containing "Hello, world!", and render it to a `<div>` with id `example`. Notice because of JSX, we can write HTML directly 
in the `<script>` tag, which normally only accepts Javascript. The HTML is translated to Javascript strings so browser can understand.

The `<div>` it is rendered to declared on line 8, out of the `<script>` tag.

### What we know

We learn several things from this simple example. 

1. React impose us on a new syntax -- JSX. It allows us to write HTML in `<script>`. We will use it extensively in this course.
2. Essentially we are creating a self-contained component, although quite simple. It has all the logic and view in one place.

> ReactJS strongly believe that components are the right way to separate concerns rather than "templates" and "display logic" (traditional <a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank">MVC pattern</a>). 
Markup and the code that generates it are intimately tied together.

That's the reason why there is this new syntax **JSX**. We are putting view presentation, and logic code in the same place (`<script>` block or `js` file), although the view 
is still written in HTML, it need to be transformed into javascript strings so browser can understand.




