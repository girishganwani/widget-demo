import { VscLinkExternal } from 'react-icons/vsc'

const articles = [
  {
    name: "The Magic of Small Databases",
    source: "on tomcritchlow.com"
  },
  {
    name: "Re-Organizing the World’s Information: Why we need more Boutique Search Engines",
    source: "ON sariazout.mirror.xyz"
  },
  {
    name: "All you need is links",
    source: "ON subconscious.substack.com"
  },
  {
    name: "Seeing Like an Algorithm",
    source: "ON eugenewei.com"
  },
]

const RecommandedReads = () => {
  return (
    <div className='flex flex-col gap-2 mt-2'>
      <h2 className='text-[17px] font-medium text-[#343334B5]'>RECOMMENDED READS</h2>
      {articles.map(item => (
        <div className='w-[411px] h-[51px] border-[1px] p-1 border-[#DBC9E5] rounded-xl bg-white'>
        <div className='flex items-center justify-between'>
          <p className='text-base font-normal line-clamp-1 mr-2'>{item.name}</p>
          <div className='text-[12px]'>
              <VscLinkExternal />
          </div>
        </div>
        <p className='text-[10px] text-[#940FAF]'>{item.source}</p>
      </div>
      ))}
      <button className='w-[79px] h-[18px] bg-[#B9D1F8] text-[#940FAF] text-[9px] flex justify-center font-semibold rounded-lg items-center mt-2'>LOAD MORE...</button>
    </div>
  )
}

export default RecommandedReads