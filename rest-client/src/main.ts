import axios from 'axios';

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('start..');

  const btn = document.getElementById('getReq');

  btn?.addEventListener('click', () => handleGetRequest());
});

export function handleGetRequest() {
  axios.defaults.baseURL = 'http://localhost:3000/api';

  axios.get('/people/1').then((res: any) => {
    console.log(res.data);
  });
}
