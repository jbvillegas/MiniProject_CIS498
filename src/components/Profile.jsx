import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../App";

const Profile = () => {
  const { userProfile, setUserProfile } = useContext(DataContext);
  const [editMode, setEditMode] = useState(false);
  const [editedProfile, setEditedProfile] = useState(userProfile || {});

  
  const inputChange = (field, value) => {
    setEditedProfile({ ...editedProfile, [field]: value });
  };

  const inputSave = () => {
    setUserProfile(editedProfile); 
    setEditMode(false);
  };

  const checkEmail = (email) => {
    return email && email.includes("@") && email.includes(".");
  };
  const isZipCodeValid = (zipCode) => !isNaN(zipCode);

  useEffect(() => {
    setEditedProfile(userProfile || {});
  }, [userProfile]);

  return (
    <div className="p-6 bg-black-900 text-black-50 mt-5">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-500">Your Profile</h2>

      {editMode ? (
        <div className="space-y-6">
          
          <div>
            <label className="block text-lg font-semibold text-black-50 mb-2" htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              value={editedProfile?.firstName || ""}
              onChange={(e) => inputChange("firstName", e.target.value)}
              className="w-full p-3 rounded-lg bg-black-800 text-black-50 border border-black-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-black-50 mb-2" htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              value={editedProfile?.lastName || ""}
              onChange={(e) => inputChange("lastName", e.target.value)}
              className="w-full p-3 rounded-lg bg-black-800 text-black-50 border border-black-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-semibold text-black-50 mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={editedProfile?.email || ""}
              onChange={(e) => inputChange("email", e.target.value)}
              className="w-full p-3 rounded-lg bg-black-800 text-black-50 border border-black-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {!checkEmail(editedProfile?.email) && (
              <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
            )}
          </div>

          {/* Bio/Message Textarea */}
          <div>
            <label className="block text-lg font-semibold text-black-50 mb-2" htmlFor="bio">About Me / Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={editedProfile?.bio || ""}
              onChange={(e) => inputChange("bio", e.target.value)}
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows="5"
              placeholder="Tell us about yourself..."
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-lg font-semibold text-black-50 mb-2" htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={editedProfile?.city || ""}
              onChange={(e) => inputChange("city", e.target.value)}
              className="w-full p-3 rounded-lg bg-black-800 text-black-50 border border-black-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-black-50 mb-2" htmlFor="zipCode">Zip Code</label>
            <input
              id="zipCode"
              type="text"
              value={editedProfile?.zipCode || ""}
              onChange={(e) => inputChange("zipCode", e.target.value)}
              className="w-full p-3 rounded-lg bg-black-800 text-black-50 border border-black-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {!isZipCodeValid(editedProfile?.zipCode) && (
              <p className="text-red-500 text-sm mt-1">Zip Code must be numeric.</p>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold text-black-50 mb-2" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={editedProfile?.username || ""}
              onChange={(e) => inputChange("username", e.target.value)}
              className="w-full p-3 rounded-lg bg-black-800 text-black-50 border border-black-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-black-50 mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={editedProfile?.password || ""}
              onChange={(e) => inputChange("password", e.target.value)}
              className="w-full p-3 rounded-lg bg-black-800 text-black-50 border border-black-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button
            className="bg-teal-500 text-black-50 px-6 py-3 rounded-lg w-full mt-4 hover:bg-teal-400"
            onClick={inputSave}
            disabled={!checkEmail(editedProfile?.email) || !isZipCodeValid(editedProfile?.zipCode)}
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div className="space-y-6">
\
          <div>
            <h3 className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">First Name:</h3>
            <p>{userProfile?.firstName}</p>
          </div>

          <div>
            <h3 className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">Last Name:</h3>
            <p>{userProfile?.lastName}</p>
          </div>

          <div>
            <h3 className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">Email:</h3>
            <p>{userProfile?.email}</p>
          </div>

          <div>
            <h3 className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">About Me / Bio:</h3>
            <p>{userProfile?.bio}</p>
          </div>

          <div>
            <h3 className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">City:</h3>
            <p>{userProfile?.city}</p>
          </div>

          <div>
            <h3 className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">Zip Code:</h3>
            <p>{userProfile?.zipCode}</p>
          </div>

          <div>
            <h3 className="className=w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">Username:</h3>
            <p>{userProfile?.username}</p>
          </div>

          <div className="flex justify-center mt-4">
          <button
            className="bg-teal-500 text-white hover:bg-teal-400 font-bold rounded py-2 px-6 text-center"
            onClick={() => setEditMode(true)}>

            Edit Profile
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default Profile;
