import axios from 'axios';

export const fetchUser = async USER => {
  const { data } = await axios.get(`https://api.github.com/users/${USER}`);
  if (data.code === 404) {
    throw new Error('Not Found');
  }
  return data;
};

export const fetchCategory = async (USER, category) => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${USER}/${category}`
    );
    return data;
  } catch (error) {
    return error.message;
  }
};
