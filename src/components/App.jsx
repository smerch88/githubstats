import { useState } from 'react';
import {
  fetchUser,
  fetchFollowingUrl,
  fetchFollowersUrl,
} from '../services/api.js';
import { Form } from './Form.jsx';
import { RenderData } from './RenderData.jsx';

export const App = () => {
  const [userData, setUserData] = useState('');
  const [followingData, setFollowingData] = useState('');
  const [followersData, setFollowersData] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    async function fetchUserData() {
      const result = await fetchUser(inputValue);
      setUserData(result);
    }
    fetchUserData();

    async function fetchFollowingData() {
      const result = await fetchFollowingUrl(inputValue);
      setFollowingData(result);
    }
    fetchFollowingData();

    async function fetchFollowersData() {
      const result = await fetchFollowersUrl(inputValue);
      setFollowersData(result);
    }
    fetchFollowersData();
  };

  return (
    <div>
      <Form
        inputValue={inputValue}
        handleSubmit={handleSubmit}
        setInputValue={setInputValue}
      />
      {userData && (
        <RenderData
          userData={userData}
          followingData={followingData}
          followersData={followersData}
        />
      )}
    </div>
  );
};
