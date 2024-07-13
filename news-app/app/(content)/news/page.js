import NewsList from '@/components/news-list';
import { sampleNews } from '../../../sample-news';

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={sampleNews} />
    </>
  )
}

export default NewsPage