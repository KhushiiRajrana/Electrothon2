import React, { useState } from "react";
import "../styles/Feed.css";


const Feed = () => {
  const [posts, setPosts] = useState([
    "NGO A distributed food.",
    "NGO B conducted a health camp.",
  ]);

  return (
    <div className="container">
      <h2>Feed</h2>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <p>{post}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;