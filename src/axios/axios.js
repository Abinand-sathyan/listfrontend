import axios from 'axios';

const instance = axios.create({
    baseURL:'https://productbackend-8m20.onrender.com/',
    // baseURL:'http://localhost:3000/',
    headers: {
        "Content-Type": "application/json",
      }
});
export default instance;