import { create } from 'apisauce';
import { API_URL, API_SECRET } from 'react-native-dotenv';

const api = create({
  baseURL: API_URL,
});

const getUpcoming = page => api.get('/3/movie/upcoming', {
  api_key: API_SECRET,
  language: 'en-US',
  page,
});

const getDetailMovie = id => api.get(`/3/movie/${id}`, {
  api_key: API_SECRET,
  language: 'en-US',
  append_to_response: 'recommendations',
});


export default { getUpcoming, getDetailMovie };
