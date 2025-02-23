import React from "react";
import avatarImage from "./assets/layne-staley.png";  // Correct path to the image

const UserProfile = () => {
  const user = {
    name: "Layne Staley",
    email: "layne@example.com",
    bio: "A passionate musician and grunge enthusiast.",
    avatar: avatarImage  // Use the imported image
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
        <img
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}  // Inline styles for resizing and making it round
          src={user.avatar}
          alt="User Avatar"
        />
        <h2 className="text-xl font-semibold mt-4">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="mt-2 text-gray-700">{user.bio}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
