import { useEffect, useState } from 'react'
import { VscLinkExternal } from 'react-icons/vsc'
import useCacheQuery from '../hooks/useCacheQuery'
import { IRecommendedArticle } from '../types/interfaces'

const RecommandedReads = ({showPersonalLibModal}: {showPersonalLibModal: boolean}) => {
  const [visibleArticle, setVisibleArticle] = useState(4);
  const [isLoadBtnVisible, setIsLoadBtnVisible] = useState(false);

  const { data: allRecommendedUrls, axiosRequest: fetchUrlsAxiosRequest } = useCacheQuery<IRecommendedArticle[]>({ 
    requestConfig: {
      method: 'GET',
      url: '/recommended',
      cacheKey: 'recommandedUrls',
    }
  });

  useEffect(() => {
    fetchUrlsAxiosRequest()
  }, [])

  const loadMore = () => {
    setVisibleArticle(prev => prev + 4);
    if(visibleArticle === allRecommendedUrls?.length){
      setIsLoadBtnVisible(true);
    }
  }
  return (
    <div className='flex flex-col gap-2 mt-2'>
      <h2 className='text-[17px] font-medium text-[#343334B5]'>RECOMMENDED READS</h2>
      <div className='max-h-[230px] overflow-y-auto overflow-x-hidden space-y-2 scrollbar-hide'>
        {allRecommendedUrls?.slice(0, visibleArticle).map((item, index) => (
          <a href={item.articleURL} target='_blank' className='pb-0 flex'>
            <div className='w-[411px] h-[51px] border-[1px] p-1 border-[#DBC9E5] rounded-xl bg-white' key={index}>
              <div className='flex items-center justify-between'>
                <p className='text-base font-normal line-clamp-1 mr-2'>{item.title}</p>
                <div className='text-[12px] mr-4'>
                    <a href={item.websiteURL}><VscLinkExternal/></a>
                </div>
              </div>
              <p className='text-[10px] text-[#940FAF]'>{item.articleURL}</p>
            </div>
          </a>
        ))}
      </div>
      {!isLoadBtnVisible && !showPersonalLibModal &&
      <button 
      className='w-[79px] h-[18px] bg-[#B9D1F8] text-[#940FAF] text-[9px] flex justify-center font-semibold rounded-lg items-center mt-2'
      onClick = {loadMore}
      >
        LOAD MORE...
      </button>
      }
    </div>
  )
}

export default RecommandedReads;