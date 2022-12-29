import axios from 'axios';

export const fetchUser = async USER => {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${USER}`);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchFollowingUrl = async USER => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${USER}/following`
    );
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchFollowersUrl = async USER => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${USER}/followers`
    );
    return data;
  } catch (error) {
    return error.message;
  }
};
