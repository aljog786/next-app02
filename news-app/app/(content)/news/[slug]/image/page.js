import { notFound } from "next/navigation";
import { sampleNews } from "../../../../../sample-news";
export default function ImagePage({params}) {
const newsItemSlug = params.slug;
const newsItem = sampleNews.find((newsItem) => newsItem.slug === newsItemSlug);

if(!newsItem){
    notFound();
}

  return (
    <div className="fullscreen-image">
    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
    </div>
  )
}
