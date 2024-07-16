'use client';

import NewsList from '@/components/news-list';
// import { useEffect, useState } from 'react';
import { getAllNews } from '@/lib/news'

export default function NewsPage() {

  const { isLoading, error, news } = getAllNews();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>News Page</h1>
      {news && <NewsList news={news} />}
    </>
  )
}
