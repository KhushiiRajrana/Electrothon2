import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, text: "NGO A distributed food.", image: null, likes: 0, comments: [] },
    { id: 2, text: "NGO B conducted a health camp.", image: null, likes: 0, comments: [] }
  ]);

  // 🟢 Post Create Function (Profile Page se bhi Add ho)
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // New Post upar show ho
  };

  // 🔴 Post Delete Function
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // ❤️ Like Function
  const likePost = (id) => {
    setPosts(posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  // 💬 Comment Function
  const addComment = (id, comment) => {
    setPosts(posts.map((post) =>
      post.id === id ? { ...post, comments: [...post.comments, comment] } : post
    ));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/profile" 
          element={<Profile posts={posts} addPost={addPost} deletePost={deletePost} likePost={likePost} addComment={addComment} />} 
        />
        <Route 
          path="/feed" 
          element={<Feed posts={posts} deletePost={deletePost} likePost={likePost} addComment={addComment} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
