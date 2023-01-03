export const RenderRepos = ({
  userData,
  displayRepos,
  handleReposButtonClick,
  reposData,
}) => {
  return (
    <>
      <p>Repos: {userData.public_repos}</p>
      <button onClick={handleReposButtonClick}>Show 5 Repos</button>
      {displayRepos && (
        <ul>
          {reposData.slice(0, 5).map(repo => (
            <li key={repo.id}>
              <a
                href={'https://github.com/' + repo.full_name}
                rel="noopener noreferrer"
                target="_blank"
              >
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
