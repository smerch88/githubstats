import { useState } from 'react';

export const RenderData = ({ userData, followingData, followersData }) => {
  //   console.log(userData);
  //   console.log(followingData);
  //   console.log(followersData);
  const [displayFollowers, setDisplayFollowers] = useState(false);
  const [displayFollowing, setDisplayFollowing] = useState(false);

  const handleFollowersButtonClick = () => {
    setDisplayFollowers(!displayFollowers);
  };

  const handleFollowingButtonClick = () => {
    setDisplayFollowing(!displayFollowing);
  };

  return (
    <>
      <img src={userData.avatar_url} alt="" />
      <p>{userData.bio}</p>
      <p>Followers count: {userData.followers}</p>
      <button onClick={handleFollowersButtonClick}>Show Followers</button>
      {displayFollowers && (
        <ul>
          {followersData.map(followerUser => (
            <li key={followerUser.id}>
              <a
                href={'https://github.com/' + followerUser.login}
                rel="noopener noreferrer"
                target="_blank"
              >
                {followerUser.login}
              </a>
            </li>
          ))}
        </ul>
      )}
      <p>Following users count: {userData.following}</p>
      <button onClick={handleFollowingButtonClick}>Show Following</button>
      {displayFollowing && (
        <ul>
          {followingData.map(followingUser => (
            <li key={followingUser.id}>
              <a
                href={'https://github.com/' + followingUser.login}
                rel="noopener noreferrer"
                target="_blank"
              >
                {followingUser.login}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
