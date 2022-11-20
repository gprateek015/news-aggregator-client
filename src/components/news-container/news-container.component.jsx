import NewsCard from '../news-card/news-card.component';

import './news-container.styles.scss';

const NewsContainer = ({ newsData }) => {
  return (
    <div className='news-container'>
      {newsData.length &&
        newsData.map((news, ind) => <NewsCard data={news} key={ind} />)}
    </div>
  );
};

export default NewsContainer;
