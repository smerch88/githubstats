export const RenderFollowing = ({
  userData,
  handleFollowingButtonClick,
  displayFollowing,
  followingData,
}) => {
  return (
    <>
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
