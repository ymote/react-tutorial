Let's continue from the last exercise. We will save new comments to ***_comments.json*** in this exercise.

When a user submits a comment, we will need to refresh the list of comments to include the new one. It makes sense to do 
all of this logic in CommentBox since CommentBox owns the state that represents the list of comments.

### Callbacks as props

We need to pass user entered comment from the `CommentForm` component back up to `CommentBox`. 

We do this in `CommentBox`'s render method by passing a new callback (`handleCommentSubmit`) to the form as prop. 

In `CommentForm`'s `handleSubmit` method, we invoke this callback, passing the newly created comment.

### Save to server

The `handleCommentSubmit` method in `CommentBox` will be triggerd every time there is a new comment. We can again use 
jQuery's `$.ajax` to save the comment. This time, we use the **POST** method. (It is a convention to use HTTP POST method when 
create new data, and use HTTP GET to retrive data).

```js
$.ajax({
  url: //the url to post data,
  dataType: 'json',
  type: 'POST',
  data: //the actual data to save,
  success: function(data) {
    //the server returns the data with new comment
    //we need to update the this.state to the new {data: data}
  }.bind(this),
  error: function(xhr, status, err) {
    console.error(this.props.url, status, err.toString());
  }.bind(this)
});
```

On server side, we first read the post information from ***_comments.json***, then append the new comment and save back to 
the json file. Also the updated post is returned so we can update the client side.

### Optimization: optimistic updates

Our application is now feature complete but it feels slow to have to wait for the request to complete before your comment appears in the list. 
We can optimistically add this comment to the list to make the app feel faster.

So in the `CommentBox`, we can directly add the new comment to the state, and then send the comment to server to save to file.








