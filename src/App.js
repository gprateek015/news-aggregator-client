import { useState, useEffect } from 'react';
import NewsContainer from './components/news-container/news-container.component';

import { getNews } from './utils';

import CloudOutline from './assets/cloud.png';

import './App.scss';

const App = () => {
  const preferences = [
    'Latest',
    'Breaking News',
    'Opinion',
    'Local',
    'Politics',
    'Entertainment',
    'Football'
  ];
  const [prefInd, setPrefInd] = useState(0);
  const [newsData, setNewsData] = useState([]);

  const LoadNews = async () => {
    try {
      const news = await getNews(preferences[prefInd]);
      setNewsData(news);
    } catch (err) {
      console.log('Error in getting news', err);
    }
  };

  useEffect(() => {
    LoadNews();
  }, [prefInd]);

  return (
    <div className='App'>
      <img src={CloudOutline} className='cloudImg' />
      <h1 style={{ textAlign: 'center' }}>News Aggregator</h1>
      <div className='preference'>
        {preferences.map((pref, ind) => (
          <h4
            key={ind}
            onClick={() => {
              setPrefInd(ind);
            }}
            className={ind === prefInd ? 'active' : ''}
          >
            {pref}
          </h4>
        ))}
      </div>
      <NewsContainer newsData={newsData} />
    </div>
  );
};

export default App;
