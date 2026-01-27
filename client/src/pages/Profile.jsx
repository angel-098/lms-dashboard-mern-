import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Angel Sriram",
    email: "angel@email.com",
    role: "Student",
  });

  const [editing, setEditing] = useState(false);

  return (
    <div className="main">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">Profile</h1>
      </div>

      <div className="profile-card">
        {/* Left Side – Avatar */}
        <div className="profile-left">
          <div className="avatar">
            {user.name.charAt(0)}
          </div>
          <h3>{user.name}</h3>
          <p className="muted-text">{user.role}</p>
        </div>

        {/* Right Side – Form */}
        <div className="profile-right">
          <h3 className="section-title">Profile Information</h3>

          <div className="profile-field">
            <label>Name</label>
            <input
              type="text"
              value={user.name}
              disabled={!editing}
              onChange={e =>
                setUser({ ...user, name: e.target.value })
              }
            />
          </div>

          <div className="profile-field">
            <label>Email</label>
            <input
              type="email"
              value={user.email}
              disabled={!editing}
              onChange={e =>
                setUser({ ...user, email: e.target.value })
              }
            />
          </div>

          <div className="profile-field">
            <label>Role</label>
            <input type="text" value={user.role} disabled />
          </div>

          {/* Actions */}
          <div className="profile-actions">
            {!editing ? (
              <button
                className="primary-btn"
                onClick={() => setEditing(true)}
              >
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  className="primary-btn"
                  onClick={() => setEditing(false)}
                >
                  Save Changes
                </button>
                <button
                  className="secondary-btn"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
