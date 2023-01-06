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
          {reposData
            .sort((rep1, rep2) => {
              return -(new Date(rep1.updated_at) - new Date(rep2.updated_at));
            })
            .slice(0, 5)
            .map(repo => (
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
