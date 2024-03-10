const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

// Excution
lab11();

// Function Declaration
async function lab11() {
  // Given params
  const userId = 1;
  const postId = 5;
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const SLUG = "/posts";
  const targetUrl = `${BASE_URL}${SLUG}`;

  // Create RequestHandler object
  const requestHandler = new RequestHandler();

  const post = await requestHandler.printTargetPost(userId, postId, targetUrl);
  const allPost = await requestHandler.printAllPosts(userId, targetUrl);

  if (post) {
    console.log(post);
  } else {
    console.log(
      `The post ID: ${postId} is not existing for the user ${userId}`
    );
  }

  console.log(allPost);
}
