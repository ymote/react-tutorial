In this exercise, we will use **AJAX** to fetch comments from ***_comments.json***.

### Data Model

Take a look at the ***_comments.json*** file. It stores a post and its comments. 
The post has `content` (string) and `comments` (array). For each comment, there are `author`(string) and `text`(string).

### AJAX

We use jQuery's <a href="http://api.jquery.com/jquery.ajax/" target="_blank">$.ajax</a> to make an asynchronous request. 
The method signature for $.ajax is listed below,

```js
$.ajax({
  url: /* url to send request to */,
  dataType: 'json',
  success: function(data) {
    /* the data is the post object in _comments.json */
  }.bind(this),
  error: function(xhr, status, err) {
    console.log('Can not fetch _comments.json');
  }.bind(this)
});
```

In the ajax `success` callback, we need to use `setState` to update data. From the last exercise, we know the ajax call should be 
in `componentDidMount` method. 







