import axios from 'axios';
export const getNews = async (pref = 'latest') => {
  pref = pref.split(' ').join('_');
  try {
    const res = await axios.get(
      `http://127.0.0.1:8000/scrape_${pref.toLowerCase()}/`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};
