import { useEffect, useState } from 'react'
import { VscLinkExternal } from 'react-icons/vsc'
import { IURLResponse } from '../types/interfaces'
import useCacheQuery from '../hooks/useCacheQuery'
// import { IURLResponse } from '../types/interfaces'
// import useCacheQuery from '../hooks/useCacheQuery'

const articles = [
  {
    title: "The Magic of Small Databases",
    articleURL: "on tomcritchlow.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "Re-Organizing the World’s Information: Why we need more Boutique Search Engines",
    articleURL: "ON sariazout.mirror.xyz",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "All you need is links",
    articleURL: "ON subconscious.substack.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "Seeing Like an Algorithm",
    articleURL: "ON eugenewei.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "Seeing Like an Algorithm",
    articleURL: "ON eugenewei.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "The Magic of Small Databases",
    articleURL: "on tomcritchlow.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "Re-Organizing the World’s Information: Why we need more Boutique Search Engines",
    articleURL: "ON sariazout.mirror.xyz",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "All you need is links",
    articleURL: "ON subconscious.substack.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "Seeing Like an Algorithm",
    articleURL: "ON eugenewei.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "Seeing Like an Algorithm",
    articleURL: "ON eugenewei.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "The Magic of Small Databases",
    articleURL: "on tomcritchlow.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "Re-Organizing the World’s Information: Why we need more Boutique Search Engines",
    articleURL: "ON sariazout.mirror.xyz",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "All you need is links",
    articleURL: "ON subconscious.substack.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "Seeing Like an Algorithm",
    articleURL: "ON eugenewei.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "Seeing Like an Algorithm",
    articleURL: "ON eugenewei.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "The Magic of Small Databases",
    articleURL: "on tomcritchlow.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "Re-Organizing the World’s Information: Why we need more Boutique Search Engines",
    articleURL: "ON sariazout.mirror.xyz",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "All you need is links",
    articleURL: "ON subconscious.substack.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "Seeing Like an Algorithm",
    articleURL: "ON eugenewei.com",
    websiteBaseURL: "http://google.com"
  },
  {
    title: "Seeing Like an Algorithm",
    articleURL: "ON eugenewei.com",
    websiteBaseURL: "http://google.com"
  },
]

const requestConfig = {
  method: 'GET',
  url: '/recommended',
  cacheKey: 'recommendedUrls',
}

const RecommandedReads = () => {
  const [visibleArticle, setVisibleArticle] = useState(4)
  const { data, axiosRequest, error, loading } = useCacheQuery<IURLResponse[]>({ requestConfig });

  console.log("DATA: ",data, "AXIOSREQ: ",axiosRequest, "ERROR: ",error, "LOADING: ",loading)

  useEffect(() => {
    axiosRequest();
  },[]);

  const loadMore = () => {
    setVisibleArticle(prev => prev + 4);
  }
  return (
    <div className='flex flex-col gap-2 mt-2'>
      <h2 className='text-[17px] font-medium text-[#343334B5]'>RECOMMENDED READS</h2>
      <div className='max-h-80 overflow-y-auto overflow-x-hidden space-y-2 scrollbar-hide'>
        {articles.slice(0, visibleArticle).map((item, index) => (
          <div className='w-[411px] h-[51px] border-[1px] p-1 border-[#DBC9E5] rounded-xl bg-white' key={index}>
          <div className='flex items-center justify-between'>
            <p className='text-base font-normal line-clamp-1 mr-2'>{item.title}</p>
            <div className='text-[12px] mr-4'>
                <a href={item.websiteBaseURL}><VscLinkExternal/></a>
            </div>
          </div>
          <p className='text-[10px] text-[#940FAF]'>{item.articleURL}</p>
        </div>
        ))}
      </div>
      <button 
      className='w-[79px] h-[18px] bg-[#B9D1F8] text-[#940FAF] text-[9px] flex justify-center font-semibold rounded-lg items-center mt-2'
      onClick = {loadMore}
      >
        LOAD MORE...
      </button>
    </div>
  )
}

export default RecommandedReads;