import axios from 'axios';
export const getNews = async (pref = 'latest') => {
  pref = pref.split(' ').join('_');
  try {
    // const url = 'http://127.0.0.1:8000';
    const url = 'https://newsaggregator01.herokuapp.com';
    const res = await axios.get(`${url}/scrape_${pref.toLowerCase()}/`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
