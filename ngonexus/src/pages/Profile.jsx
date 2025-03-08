import React, { useState } from "react";
import "../styles/Profile.css";

const Profile = ({ posts, addPost, deletePost, likePost, addComment }) => {
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null);

  // 🟢 Handle Post Creation
  const handlePost = () => {
    if (newPost.trim()) {
      addPost({ id: Date.now(), text: newPost, image, likes: 0, comments: [] });
      setNewPost("");
      setImage(null);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile">
        <img src="https://via.placeholder.com/120" alt="Profile" />
        <h2>NGO Name</h2>
        <p>NGO Bio: Working for society.</p>
      </div>

      {/* 🔹 Post Input Box */}
      <div className="create-post">
        <textarea 
          value={newPost} 
          onChange={(e) => setNewPost(e.target.value)} 
          placeholder="Share your NGO's work..." 
        />
        <input type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
        <button onClick={handlePost}>Post</button>
      </div>

      {/* 🔹 Display Posts */}
      <div className="posts">
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
    </div>
  );
};

export default Profile;
