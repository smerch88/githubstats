import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCategory } from '../services/api.js';
import { RenderFollowers } from './RenderFollowers.jsx';
import { RenderFollowing } from './RenderFollowing.jsx';
import { RenderRepos } from './RenderRepos.jsx';
import { Button } from '../styles/CommonStyles';
import { Card, ImgWrapper, Bio, Login } from 'styles/RenderDataStyles.js';

export const RenderData = ({ userData, deleteUser }) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayFollowers]);

  useEffect(() => {
    async function fetchFolling() {
      if (displayFollowing) {
        const result = await fetchCategory(userData.login, 'following');
        setFollowingData(result);
      }
    }
    fetchFolling();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayFollowing]);

  useEffect(() => {
    async function fetchRepos() {
      if (displayRepos) {
        const result = await fetchCategory(userData.login, 'repos');
        setReposData(result);
      }
    }
    fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayRepos]);

  return (
    <Card>
      <ImgWrapper>
        <img
          src={userData.avatar_url}
          alt={userData.login}
          width="100px"
          height="100px"
        />
      </ImgWrapper>
      <a href={userData.html_url}>
        <Login>Name: {userData.login}</Login>
      </a>
      <Bio>
        <p>Bio: {userData.bio}</p>
      </Bio>
      <RenderFollowers
        userData={userData}
        handleFollowersButtonClick={handleFollowersButtonClick}
        displayFollowers={displayFollowers}
        followersData={followersData}
      />
      <RenderFollowing
        userData={userData}
        handleFollowingButtonClick={handleFollowingButtonClick}
        displayFollowing={displayFollowing}
        followingData={followingData}
      />
      <RenderRepos
        userData={userData}
        displayRepos={displayRepos}
        handleReposButtonClick={handleReposButtonClick}
        reposData={reposData}
      />
      <Button onClick={() => deleteUser(userData.id)}>Delete User</Button>
    </Card>
  );
};
