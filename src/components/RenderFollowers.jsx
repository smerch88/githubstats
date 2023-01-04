import { Button, Ul } from '../styles/CommonStyles';

export const RenderFollowers = ({
  userData,
  handleFollowersButtonClick,
  displayFollowers,
  followersData,
}) => {
  return (
    <>
      <p>Followers count: {userData.followers}</p>
      <Button
        primary
        disabled={!userData.followers}
        onClick={handleFollowersButtonClick}
      >
        Show Followers
      </Button>
      {displayFollowers && (
        <Ul>
          {followersData.map(followerUser => (
            <li key={followerUser.id}>
              <a
                href={`https://github.com/${followerUser.login}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {followerUser.login}
              </a>
            </li>
          ))}
        </Ul>
      )}
    </>
  );
};
