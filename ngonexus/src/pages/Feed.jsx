"use client"

import { useState } from "react"
import "../styles/Feed.css"

function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      organization: "Green Earth Initiative",
      title: "Beach Cleanup Drive",
      description: "Join us for our monthly beach cleanup drive this Saturday. Together we can make a difference!",
      date: "2023-06-15",
      location: "Coastal Beach",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      organization: "Education For All",
      title: "Teaching Volunteers Needed",
      description: "Looking for passionate volunteers to teach underprivileged children. No prior experience required.",
      date: "2023-06-20",
      location: "Community Center",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      organization: "Animal Rescue Society",
      title: "Adoption Drive",
      description: "Help our furry friends find forever homes. Adoption drive this Sunday from 10 AM to 4 PM.",
      date: "2023-06-18",
      location: "City Park",
      image: "/placeholder.svg?height=200&width=300",
    },
  ])

  return (
    <div className="feed-container">
      <div className="feed-header">
        <h1>Activity Feed</h1>
        <div className="feed-filters">
          <select className="filter-select">
            <option value="all">All Categories</option>
            <option value="environment">Environment</option>
            <option value="education">Education</option>
            <option value="animals">Animals</option>
          </select>
          <button className="filter-button">Filter</button>
        </div>
      </div>

      <div className="posts-container">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-image">
              <img src={post.image || "/placeholder.svg"} alt={post.title} />
            </div>
            <div className="post-content">
              <div className="post-organization">{post.organization}</div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-description">{post.description}</p>
              <div className="post-details">
                <span className="post-date">
                  <i className="icon-calendar"></i> {post.date}
                </span>
                <span className="post-location">
                  <i className="icon-location"></i> {post.location}
                </span>
              </div>
              <button className="post-action-button">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feed

