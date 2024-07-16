import { sampleNews } from '../sample-news';

import { useEffect, useState } from 'react';

export function getAllNews() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:8080/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const newsData = await response.json();
        setNews(newsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews();
  }, []);

  return { isLoading, error, news };
}


export function getLatestNews() {
  return sampleNews.slice(0, 3);
}

export function getAvailableNewsYears() {
  return sampleNews.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year) {
  return sampleNews.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year) {
  return sampleNews.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year, month) {
  return sampleNews.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}