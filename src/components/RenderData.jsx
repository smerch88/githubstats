import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCategory } from '../services/api.js';
import { Button, Card, Image } from '@mantine/core';
import styled from '@emotion/styled';

const UserCard = styled.div`
  width: 400px;
  height: 500px;
  overflow-y: scroll;
  padding: 24px;
  border: 10px solid lightgrey;
  border-radius: 16px;
`;

export const RenderData = ({ userData, deleteUser }) => {
  console.log(userData);
  const [displayFollowers, setDisplayFollowers] = useState(false);
  const [displayFollowing, setDisplayFollowing] = useState(false);
  const [displayRepos, setDisplayRepos] = useState(false);
  const [followersData, setFollowersData] = useState([]);
  const [followingData, setFollowingData] = useState([]);
  const [reposData, setReposData] = useState([]);

  const handleFollowersButtonClick = () => {
    setDisplayFollowers(!displayFollowers);
  };

  const handleFollowingButtonClick = () => {
    setDisplayFollowing(!displayFollowing);
  };

  const handleReposButtonClick = () => {
    setDisplayRepos(!displayRepos);
  };

  useEffect(() => {
    async function fetchFollowers() {
      if (displayFollowers) {
        const result = await fetchCategory(userData.login, 'followers');
        setFollowersData(result);
      }
    }
    fetchFollowers();
  }, [displayFollowers]);

  useEffect(() => {
    async function fetchFolling() {
      if (displayFollowing) {
        const result = await fetchCategory(userData.login, 'following');
        setFollowingData(result);
      }
    }
    fetchFolling();
  }, [displayFollowing]);

  useEffect(() => {
    async function fetchRepos() {
      if (displayRepos) {
        const result = await fetchCategory(userData.login, 'repos');
        setReposData(result);
      }
    }
    fetchRepos();
  }, [displayRepos]);

  return (
    <UserCard>
      <Card.Section>
        <Image src={userData.avatar_url} alt="" width="100px" height="100px" />{' '}
      </Card.Section>
      <p>{userData.bio}</p>
      <p>Followers count: {userData.followers}</p>
      <Button onClick={handleFollowersButtonClick}>Show Followers</Button>
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
      <Button onClick={handleFollowingButtonClick}>Show Following</Button>
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
      <p>Repos: {userData.public_repos}</p>
      <Button onClick={handleReposButtonClick}>Show 5 Repos</Button>
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
      <Button color="red" onClick={() => deleteUser(userData.id)}>
        Delete User
      </Button>
    </UserCard>
  );
};
