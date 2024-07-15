'use client';

import NewsList from '@/components/news-list';

const NewsPage = async () => {

  const response = await fetch('http://localhost:8080/news');

  if(!response.ok){
throw new Error("failed to fetch news!!!")
  }

  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  )
}

export default NewsPage