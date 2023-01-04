import { Button, Ul } from '../styles/CommonStyles';

export const RenderRepos = ({
  userData,
  displayRepos,
  handleReposButtonClick,
  reposData,
}) => {
  return (
    <>
      <p>Repos: {userData.public_repos}</p>
      <Button
        primary
        onClick={handleReposButtonClick}
        disabled={!userData.public_repos}
      >
        Show Some Repos
      </Button>
      {displayRepos && (
        <Ul>
          {reposData.slice(0, 5).map(repo => (
            <li key={repo.id}>
              <a
                href={`https://github.com/${repo.full_name}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {repo.name}
              </a>
            </li>
          ))}
        </Ul>
      )}
    </>
  );
};
