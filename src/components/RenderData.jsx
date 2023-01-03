import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCategory } from '../services/api.js';
import { RenderFollowers } from './RenderFollowers.jsx';
import { RenderFollowing } from './RenderFollowing.jsx';
import { RenderRepos } from './RenderRepos.jsx';

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
    <>
      <img src={userData.avatar_url} alt="" width="100px" height="100px" />
      <p>{userData.bio}</p>
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
      <button color="red" onClick={() => deleteUser(userData.id)}>
        Delete User
      </button>
    </>
  );
};
