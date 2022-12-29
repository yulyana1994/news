const postsURL = "https://jsonplaceholder.typicode.com/posts";
const commentURL = "https://jsonplaceholder.typicode.com/comments";

const getPost = async () => {
  try {
    const responsePosts = await fetch(postsURL);
    const posts = await responsePosts.json();
    return posts;
  } catch (error) {
    throw error;
  }
};

const getComment = async () => {
  try {
    const responseComments = await fetch(commentURL);
    const comments = await responseComments.json();
    return comments;
  } catch (error) {
    throw error;
  }
};

const getAllData = () => {
  return Promise.all([getPost, getComment]);
};

export default getAllData;
