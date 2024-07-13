import { sampleNews } from '../sample-news';

export function getAllNews() {
  return sampleNews;
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