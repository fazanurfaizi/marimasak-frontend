import axios from 'axios'

const ax = axios.create({
    baseURL: `http://127.0.0.1:8000/api`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json; chartset=utf-8',
        'X-Requested-With': 'XMLHTTPRequest'
    }
});

ax.interceptors.request.use(
    function(config) {
  
      // Do something before request is sent
      const token = localStorage.getItem('access-token');
  
      if (token) {
        config.headers.common.Authorization = `Bearer ${token}`;
      }
  
      return config;
    },
    function(error) {
      // Do something with request eror
      return Promise.reject(error);
    }
  );
  
export default ax