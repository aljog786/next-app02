import { notFound } from 'next/navigation';
import { sampleNews } from '../../../../backend/data';

const NewsDetailPage = ({params}) => {
    const newsSlug = params.slug;
    const newsItem = sampleNews.find((newsItem) => newsItem.slug === newsSlug);
  
    if (!newsItem) {
      notFound();
    }
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  )
}

export default NewsDetailPage