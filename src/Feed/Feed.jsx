import Post from "../Post/Post.jsx";
import posts from "../assets/posts.js";
function Feed() {
  return (
    <div>
      {posts.map(({ username, content, likes, timestamp }) => (
        <Post
          username={username}
          content={content}
          likes={likes}
          timestamp={timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
