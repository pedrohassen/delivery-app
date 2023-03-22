import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOSTNAME}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint, token) => {
  setToken(token);
  const { data } = await api.get(endpoint);
  console.log({ data });
  return data;
};

export const requestLogin = async (body) => {
  const { data } = await api.post('/login', body);
  return data;
};

export const requestRegister = async (body) => {
  try {
    const { data } = await api.post('/register', body);

    return data;
  } catch (error) {
    if (error.response) {
      console.log(
        'Status:',
        error.response.status,
        ' Message:',
        error.response.data.message,
      );
      return error.response.data.message;
    }
    console.log('Error', error.response.data.message);
  }
};

export const requestCheckout = async (body) => {
  try {
    const { data } = await api.post('/orders', body);

    return data;
  } catch (error) {
    if (error.response) {
      console.log(
        'Status:',
        error.response.status,
        ' Message:',
        error.response.data.message,
      );
      return error.response.data.message;
    }
    console.log('Error', error.response.data.message);
  }
};

export const requestSales = async () => {
  try {
    const { data } = await api.get('/orders');

    return data;
  } catch (error) {
    if (error.response) {
      console.log(
        'Status:',
        error.response.status,
        ' Message:',
        error.response.data.message,
      );
      return error.response.data.message;
    }
    console.log('Error', error.response.data.message);
  }
};

export const requestUpdateStatus = async (id, body) => {
  const { data } = await api
    .put(`/orders/${id}`, body);

  return data;
};

export const requestUserById = async (id) => {
  try {
    const { data } = await api.get(`/users/${id}`);

    return data;
  } catch (error) {
    if (error.response) {
      console.log(
        'Status:',
        error.response.status,
        ' Message:',
        error.response.data.message,
      );
      return error.response.data.message;
    }
    console.log('Error', error.response.data.message);
  }
};

export const requestAllUsers = async () => {
  try {
    const { data } = await api.get('/users');

    return data;
  } catch (error) {
    if (error.response) {
      console.log(
        'Status:',
        error.response.status,
        ' Message:',
        error.response.data.message,
      );
      return error.response.data.message;
    }
    console.log('Error', error.response.data.message);
  }
};

export const createNewUserAdmin = async (body, token) => {
  try {
    setToken(token);
    const { data } = await api.post('/register/admin', body);

    return data;
  } catch (error) {
    if (error.response) {
      console.log(
        'Status:',
        error.response.status,
        ' Message:',
        error.response.data.message,
      );
      return error.response.data.message;
    }
    console.log('Error', error.response.data.message);
  }
};

export const deleteUserByID = async (id, token) => {
  try {
    setToken(token);
    const { data } = await api.delete(`/users/${id}`);

    return data;
  } catch (error) {
    if (error.response) {
      console.log(
        'Status:',
        error.response.status,
        ' Message:',
        error.response.data.message,
      );
      return error.response.data.message;
    }
    console.log('Error', error.response.data.message);
  }
};

export default api;
