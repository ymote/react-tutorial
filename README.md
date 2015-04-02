In this exercise, we will use **AJAX** to fetch comments from ***_comments.json***.

### Data Model

Take a look at the ***_comments.json*** file. It actually stores a post and related comments for it. 
The post has `content` (string) and `comments` (array). For each comment, there is `author` and `text`.

### ajax

We use jQuery's <a href="http://api.jquery.com/jquery.ajax/" target="_blank">$.ajax</a> to make an asynchronous request. 
The method signature for $.ajax is listed below,

```js
$.ajax({
  url: /* url to post */,
  dataType: 'json',
  success: function(data) {
    /* the data is the object in _comments.json */
  }.bind(this),
  error: function(xhr, status, err) {
    console.log('Can not fetch _comments.json');
  }.bind(this)
});
```

In the ajax `success` callback, we need to use `setState` to update the state to reflect the latest data. And the ajax call should be put 
in `componentDidMount` life cycle method. 







