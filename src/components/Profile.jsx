import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../App";
import { Link } from "react-router-dom";

const Profile = () => {
  const { userProfile, setProfile } = useContext(DataContext);
  const [editMode, setEditMode] = useState(false);
  const [editedProfile, setChangedProfile] = useState(userProfile || {});

  const inputChange = (field, value) => {
    setChangedProfile({ ...editedProfile, [field]: value });
  };

  const inputSave = () => {
    setProfile(editedProfile);
    setEditMode(false);
  };

  const checkEmail = (email) => {
    return email && email.includes("@") && email.includes(".");
  };

  const isZipCodeValid = (zipCode) => !isNaN(zipCode);

  useEffect(() => {
    setChangedProfile(userProfile || {});
  }, [userProfile]);

  return (
    <div className="p-6 bg-black-900 text-black-50 mt-5">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-500">YOUR PROFILE</h2>
      <p className="text-xl text-center font-bold text-gray-700 mb-4">
  YOU ARE NOW LOGGED IN AS {userProfile?.username || "Guest"}. YOU MAY EDIT YOUR INFORMATION AS YOU LIKE.
</p>
<p className="text-lg text-center text-gray-500 mb-4">
  Note: some of these features may still be in the development stage.<br/>
  If you have any questions or concerns, please <Link to="/contact" className="text-blue-500 hover:text-blue-700">contact us</Link>.
</p>

      {editMode ? (
        <div className="space-y-6">
          
          {["firstName", "lastName", "email", "bio", "city", "zipCode", "username"].map((field, index) => (
            <div key={index}>
              <label className="block text-lg font-semibold text-black-50 mb-2" htmlFor={field}>
                {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
              </label>
              <input
                id={field}
                type={field === "email" ? "email" : "text"}
                value={editedProfile?.[field] || ""}
                onChange={(e) => inputChange(field, e.target.value)}
                className="w-full p-3 rounded-lg bg-black-800 text-black-50 border border-black-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          ))}

          <button
            className="bg-teal-500 text-white font-bold px-6 py-3 rounded-lg w-full mt-4 hover:bg-teal-400"
            onClick={inputSave}
            disabled={!checkEmail(editedProfile?.email) || !isZipCodeValid(editedProfile?.zipCode)}
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          
          {["firstName", "lastName", "email", "bio", "city", "zipCode", "username"].map((field, index) => (
            <div key={index}>
              <label className="block text-lg font-semibold text-black-50 mb-2">
                {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
              </label>
              <input
                type="text"
                value={userProfile?.[field] || ""}
                readOnly
                className="w-full p-3 rounded-lg bg-black-800 text-black-50 border border-black-300"
              />
            </div>
          ))}

          <div className="flex justify-center mt-4">
            <button
              className="bg-teal-500 text-white hover:bg-teal-400 font-bold rounded py-2 px-6 text-center"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
