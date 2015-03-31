Markdown is a simple way to format your text inline. For example, surrounding text with asterisks will make it emphasized.

First, we add the third-party Showdown library to the `<head>` in ***index.html***. This is a JavaScript library which takes Markdown text and converts it to raw HTML. 

Next, let's convert the comment text to Markdown and output it.

All we need to do is to convert `this.props.children` from React's wrapped text to a raw string that Showdown will understand so we explicitly call toString().

We instantiate converter with `new Showdown.converter()`, and use the `makeHtml` method to convert the Markdown text to html.

### Escape and XSS

But there's a problem! Our rendered comments look like this in the browser: "<p>This is <em>another</em> comment</p>"(React treats everything as string, so it does not recognize HTML tags). 
We want those tags to actually render as HTML.

That's React protecting you from an <a href="http://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank">XSS</a> attack 
(So user can not inject malicious `<script>` tag into comment). There's a way to get around it but the framework warns you not to use it.

This is a special API -- `dangerouslySetInnerHTML`, that intentionally makes it difficult to insert raw HTML, but for Showdown we'll take advantage of this backdoor.

**Remember:** by using this feature you're relying on Showdown to be secure.

> React's design philosophy is that it should be “easy” to make things safe, and developers should explicitly state their intent when performing “unsafe” operations. 
The prop name dangerouslySetInnerHTML is intentionally chosen to be frightening, and the prop value (an object instead of a string) can be used to indicate sanitized data.

