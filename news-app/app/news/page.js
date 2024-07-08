import Link from 'next/link';

import { sampleNews } from '../../../backend/data';

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {sampleNews.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NewsPage