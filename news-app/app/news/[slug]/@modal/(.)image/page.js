'use client'

import { notFound,useRouter } from "next/navigation";
import { sampleNews } from "../../../../../../backend/data";

export default function interceptedImagePage({params}) {

const router = useRouter();

const newsItemSlug = params.slug;
const newsItem = sampleNews.find((newsItem) => newsItem.slug === newsItemSlug);

if(!newsItem){
    notFound();
}

  return (
    <>
    <div className="modal-backdrop" onClick={router.back} />
    <dialog className="modal" open>
    <div className="fullscreen-image">
    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
    </div>
    </dialog>
    </>
  )
}
