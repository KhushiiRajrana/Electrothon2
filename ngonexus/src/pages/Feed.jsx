import React from "react";
import "../styles/Feed.css";

const Feed = ({ posts, deletePost, likePost, addComment }) => {
  return (
    <div className="feed-container">
      <h2>Feed</h2>
      {posts.map((post) => (
        <div key={post.id} className="post">
          {post.image && <img src={post.image} alt="Post" />}
          <p>{post.text}</p>
          <div className="post-actions">
            <button onClick={() => likePost(post.id)}>❤️ {post.likes}</button>
            <button onClick={() => deletePost(post.id)}>🗑 Delete</button>
            <button onClick={() => addComment(post.id, prompt("Add a comment"))}>💬 Comment</button>
          </div>
          <div className="comments">
            {post.comments.map((comment, index) => <p key={index}>💬 {comment}</p>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
