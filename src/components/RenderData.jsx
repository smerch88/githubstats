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
        {followersData.map(user => (
          <li key={user.id}>
            <a
              href={'https://github.com/' + user.login}
              rel="noopener noreferrer"
              target="_blank"
            >
              {user.login}
            </a>
          </li>
        ))}
      </ul>
      <p>Following users count: {userData.following}</p>
      <ul>
        {followingData.map(user => (
          <li key={user.id}>
            <a
              href={'https://github.com/' + user.login}
              rel="noopener noreferrer"
              target="_blank"
            >
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
