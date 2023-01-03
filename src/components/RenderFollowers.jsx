export const RenderFollowers = ({
  userData,
  handleFollowersButtonClick,
  displayFollowers,
  followersData,
}) => {
  return (
    <>
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
    </>
  );
};
