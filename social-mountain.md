1. The POST request accepts:
Params: accepts /posts as a param
Body: accepts an object with a text key value pair

2. Data Type GET returns:
array of post objects

3. URL for deleting post with id 555:
https://practiceapi.devmountain.com/api/posts?id=555

4. Response Codes from GET at /posts/filter
200
409 - Request query is missing required text property

5. Create Post with text as your name:
URL:
https://practiceapi.devmountain.com/api/posts
body:
{
  "text": "Serena Sorensen"
}

6. Update the post from your name to favorite color:
URL:
https://practiceapi.devmountain.com/api/posts?id=824
body:
{
  "text": "teal"
}

7. URL to get posts containing the text blue:
https://practiceapi.devmountain.com/api/posts/filter?text=blue

8. Response for GET:
content type: json
charset:utf-8

9. What would cause a PUT request to return 409 status?
if it is missing an id query or text in the body.

10. What happens if you try to send a query in the GET request URL? Why do you get that response?
It returns all posts because there are no handlers in the API for a query on get.