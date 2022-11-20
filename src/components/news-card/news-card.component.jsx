import './news-card.styles.scss';

const NewsCard = ({ data }) => {
  const handleClick = () => {
    window.open(data.link);
  };
  return (
    <div className='news-card' onClick={handleClick}>
      <img src={data.img_src} className='img' />
      <h4>{data.title}</h4>
    </div>
  );
};

export default NewsCard;
