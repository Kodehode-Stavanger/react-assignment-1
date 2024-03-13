import likeIcon from "../assets/licon.jpg";
import "./Post.css"; // Import CSS file for styling

function Post({ username, content, timestamp, likes }) {
  return (
    <div className="post-container">
      <div className="post">
        <h3>{username}</h3>
        <p>{content}</p>
        <div className="like-container">
          <img src={likeIcon} alt="Like icon" className="like-icon" />
          <p>{likes}</p>
        </div>
        <p>{timestamp}</p>
      </div>
    </div>
  );
}

export default Post;
