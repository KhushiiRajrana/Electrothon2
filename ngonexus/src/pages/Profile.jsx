import React, { useState, useEffect } from "react";
import "../styles/Profile.css";


const Profile = () => {
  const [bio, setBio] = useState("NGO Bio");
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const userEmail = localStorage.getItem("userEmail");

  const addPost = () => {
    if (newPost) {
      setPosts([...posts, newPost]);
      setNewPost("");
    }
  };

  const deletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>Profile</h2>
      <p>Email: {userEmail}</p>
      <p>{bio}</p>
      <input
        type="text"
        placeholder="Write a post"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <button onClick={addPost}>Post</button>
      <div>
        {posts.map((post, index) => (
          <div key={index} className="post">
            <p>{post}</p>
            <button onClick={() => deletePost(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;