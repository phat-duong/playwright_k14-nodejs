const { sendRequest } = require("./RequestHelper");
const BASE_URL = "https://jsonplaceholder.typicode.com";
const SLUG = "/posts";
let url = `${BASE_URL}${SLUG}`;

const userId = 1;
const postId = 2;
printTargetPost(userId, postId);

printAllPosts(userId);

function printTargetPost(userId, postId) {
  getAllPost(userId).then(function (filteredPosts) {
    const targetPost = filteredPosts.filter(function (post) {
      return post.id === postId;
    })[0];

    if (targetPost) {
      console.log(targetPost);
    } else {
      console.log(
        `The post ID: ${postId} is not existing for the user ${userId}`
      );
    }

    console.log(filteredPosts);
  });
}

function printAllPosts(userId) {
  getAllPost(userId).then(function (filteredPosts) {
    console.log(filteredPosts);
  });
}

function getAllPost(userId) {
  return sendRequest(url).then(function (posts) {
    return posts.filter(function (post) {
      return post.userId === userId;
    });
  });
}
