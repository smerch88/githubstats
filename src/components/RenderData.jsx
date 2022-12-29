export const RenderData = ({ userData, followingData, followersData }) => {
  console.log(userData);
  console.log(followingData);
  console.log(followersData);

  return (
    <>
      <img src={userData.avatar_url} alt="" />
      <p>{userData.bio}</p>
      <p>Followers count: {userData.followers}</p>
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
      <p>Following users count: {userData.following}</p>
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
    </>
  );
};
