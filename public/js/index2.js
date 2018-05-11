$(document).ready(function() {
  console.log("document.ready");
  var eventsContainer = $("#events");
  console.log(eventsContainer);

  function getPosts(category) {
    console.log('getPosts')
    var categoryString = category || "";
    if (categoryString) {
      categoryString = "/category/" + categoryString;
    }
    $.get("/api/posts" + categoryString, function(posts) {
      console.log("posts: ", posts);
      eventsContainer.empty();
      if (!posts || !posts.length) {
        eventsContainer.html("No events")
      } else {
        posts.forEach(post => {
          eventsContainer.append(`<p>${post.title}: ${post.body}</p>`)
        })
      }
    });
  }

  getPosts();

});
