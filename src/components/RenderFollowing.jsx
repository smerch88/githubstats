import { Button, Ul } from '../styles/CommonStyles';

export const RenderFollowing = ({
  userData,
  handleFollowingButtonClick,
  displayFollowing,
  followingData,
}) => {
  return (
    <>
      <p>Following users count: {userData.following}</p>
      <Button
        primary
        onClick={handleFollowingButtonClick}
        disabled={!userData.following}
      >
        Show Following
      </Button>
      {displayFollowing && (
        <Ul>
          {followingData.map(followingUser => (
            <li key={followingUser.id}>
              <a
                href={`https://github.com/${followingUser.login}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {followingUser.login}
              </a>
            </li>
          ))}
        </Ul>
      )}
    </>
  );
};
