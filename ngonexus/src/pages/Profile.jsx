"use client"

import { useState } from "react";
import "../styles/Profile.css";

function Profile() {
  const [user, setUser] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "Passionate about environmental conservation and education. Looking to make a positive impact through volunteering.",
    skills: ["Teaching", "Project Management", "Social Media"],
    interests: ["Environment", "Education", "Animal Welfare"],
    avatar: "/placeholder.svg?height=150&width=150",
  });

  const [activities, setActivities] = useState([
    {
      id: 1,
      organization: "Green Earth Initiative",
      event: "Beach Cleanup Drive",
      date: "2023-05-15",
      hours: 4,
    },
    {
      id: 2,
      organization: "Education For All",
      event: "Weekend Teaching Program",
      date: "2023-05-08",
      hours: 3,
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user.name);
  const [editBio, setEditBio] = useState(user.bio);
  const [editAvatar, setEditAvatar] = useState(user.avatar);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setUser((prevUser) => ({ ...prevUser, name: editName, bio: editBio, avatar: editAvatar }));
    setIsEditing(false);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={user.avatar || "/placeholder.svg"} alt={user.name} />
          {isEditing && <input type="file" accept="image/*" onChange={handleAvatarChange} />}
        </div>
        <div className="profile-info">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="edit-input"
              />
              <textarea
                value={editBio}
                onChange={(e) => setEditBio(e.target.value)}
                className="edit-textarea"
              />
            </>
          ) : (
            <>
              <h1>{user.name}</h1>
              <p className="profile-email">{user.email}</p>
              <p className="profile-bio">{user.bio}</p>
            </>
          )}
        </div>
      </div>

      <div className="profile-details">
        <div className="profile-section">
          <h2>Skills</h2>
          <div className="profile-tags">
            {user.skills.map((skill, index) => (
              <span className="profile-tag" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h2>Interests</h2>
          <div className="profile-tags">
            {user.interests.map((interest, index) => (
              <span className="profile-tag" key={index}>
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-activities">
        <h2>Recent Activities</h2>
        <div className="activities-list">
          {activities.map((activity) => (
            <div className="activity-card" key={activity.id}>
              <div className="activity-details">
                <h3>{activity.organization}</h3>
                <p className="activity-event">{activity.event}</p>
                <div className="activity-meta">
                  <span className="activity-date">
                    <i className="icon-calendar"></i> {activity.date}
                  </span>
                  <span className="activity-hours">
                    <i className="icon-clock"></i> {activity.hours} hours
                  </span>
                </div>
              </div>
              <div className="activity-actions">
                <button className="activity-button">View Certificate</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-actions">
        {isEditing ? (
          <button className="profile-button primary" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="profile-button primary" onClick={handleEditClick}>
            Edit Profile
          </button>
        )}
        <button className="profile-button secondary">Change Password</button>
      </div>
    </div>
  );
}

export default Profile;
