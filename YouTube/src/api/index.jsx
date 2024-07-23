// api/index.js
import axios from 'axios';

const API = axios.create({ baseURL: 'https://you-tube-backend-x7tx.onrender.com' });

API.interceptors.request.use(req => {
  if (localStorage.getItem('Profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
  }
  return req;
});

export const login = (authData) => API.post('/user/login', authData);
export const updateChannelData = (id, updateData) => API.patch(`/user/update/${id}`, updateData);
export const updatePoints = (id, points) => API.patch(`/user/updatePoints/${id}`, { points });
