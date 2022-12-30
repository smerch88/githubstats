import { useEffect, useState } from 'react';
import { fetchUser } from '../services/api.js';
import { Form } from './Form.jsx';
import { RenderData } from './RenderData.jsx';
import styled from '@emotion/styled';

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Container = styled.div`
  padding: 24px;
  margin: 0 auto;
`;

export const App = () => {
  const [userData, setUserData] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [arrayOfUsers, setArrayOfUsers] = useState(() => {
    const localUsers = JSON.parse(localStorage.getItem('arrayOfUsers'));
    if (localUsers) {
      return localUsers;
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('arrayOfUsers', JSON.stringify(arrayOfUsers));
  }, [arrayOfUsers]);

  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      if (!arrayOfUsers.find(user => user.id === userData.id)) {
        setArrayOfUsers([...arrayOfUsers, userData]);
      }
    }
  }, [userData]);

  const handleSubmit = event => {
    event.preventDefault();

    async function fetchUserData() {
      const result = await fetchUser(inputValue);
      setUserData(result);
      // setUserData(result.sort((a, b) => a.created_at - b.created_at));
    }
    fetchUserData();
  };

  const deleteUser = id => {
    setArrayOfUsers(arrayOfUsers.filter(user => user.id !== id));
  };

  return (
    <Container>
      <Form
        inputValue={inputValue}
        handleSubmit={handleSubmit}
        setInputValue={setInputValue}
      />
      <Cards>
        {arrayOfUsers.map(user => (
          <li key={user.id}>
            <RenderData userData={user} deleteUser={deleteUser} />
          </li>
        ))}
      </Cards>
    </Container>
  );
};
