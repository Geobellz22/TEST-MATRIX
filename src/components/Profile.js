<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Dummy profile data
    const fetchProfileData = () => {
      setProfileData({
        username: 'JohnDoe',
        email: 'user@example.com'
      });
    };

    fetchProfileData();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {profileData ? (
        <div>
          <p>Username: {profileData.username}</p>
          <p>Email: {profileData.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
=======
import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Dummy profile data
    const fetchProfileData = () => {
      setProfileData({
        username: 'JohnDoe',
        email: 'user@example.com'
      });
    };

    fetchProfileData();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {profileData ? (
        <div>
          <p>Username: {profileData.username}</p>
          <p>Email: {profileData.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
>>>>>>> 17e709e417bb91a4e1743ca83d7ccd6b700e3d03
