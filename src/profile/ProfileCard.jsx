import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/api";
import "./ProfileCard.css";

function ProfileCard() {
  const navigate = useNavigate();
  const { user, login } = useAuth();

  const [loading, setLoading] = useState(false);

  const names = (user?.name || "").split(" ");

  const [formData, setFormData] = useState({
    firstName: names[0] || "",
    lastName: names.slice(1).join(" "),
    email: user?.email || "",
    phone: user?.phone || "",
    city: user?.city || "",
  });

  if (!user) {
    return (
      <div className="profile-container">
        <h2>User not found.</h2>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const updatedUser = {
        ...user,
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
      };

      const response = await api.put(
        `/users/${user.id}`,
        updatedUser
      );

      login(response.data);

      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-container">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="profile-header">

        <img
          className="profile-avatar"
          src={
            user.avatar ||
            `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${encodeURIComponent(
              user.name
            )}`
          }
          alt={user.name}
        />

        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>

      </div>



      <form
        className="profile-form"
        onSubmit={handleSubmit}
      >

        <h2>Personal Details</h2>

        <div className="row">

          <div className="input-group">
            <label>First Name</label>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Last Name</label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="input-group">

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

        </div>

        <div className="row">

          <div className="input-group">

            <label>Phone</label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

          </div>

          <div className="input-group">

            <label>City</label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />

          </div>

        </div>

        <button
          type="submit"
          className="save-btn"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>

      </form>

    </div>
  );
}

export default ProfileCard;