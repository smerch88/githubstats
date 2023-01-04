import { useEffect, useState } from 'react';
import { fetchUser } from '../services/api.js';
import { Form } from './Form.jsx';
import { RenderData } from './RenderData.jsx';
import GlobalStyle from '../globalStyles';
import { CardsWrapper, Container } from 'styles/AppStyles.js';
import { Store } from 'react-notifications-component';

export const App = () => {
  const [userData, setUserData] = useState('');
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const handleSubmit = inputValue => {
    async function fetchUserData() {
      try {
        const result = await fetchUser(inputValue);
        setUserData(result);
      } catch (error) {
        console.log(error);
        Store.addNotification({
          title: 'Erorr!',
          message: 'User not found',
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 1000,
            onScreen: true,
          },
        });
      }
      // setUserData(result.sort((a, b) => a.created_at - b.created_at));
    }
    fetchUserData();
  };

  const deleteUser = id => {
    setArrayOfUsers(arrayOfUsers.filter(user => user.id !== id));
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Form handleSubmit={handleSubmit} />
        <CardsWrapper>
          {arrayOfUsers.map(user => (
            <li key={user.id}>
              <RenderData userData={user} deleteUser={deleteUser} />
            </li>
          ))}
        </CardsWrapper>
      </Container>
    </>
  );
};
