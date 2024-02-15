import { useContext } from "react";
import Context from "../context";
import { IBookShelves, IContext } from "../types/interfaces";

const backgroundColors = [
  "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(48,76,137,1) 71%)",
  "linear-gradient(180deg, rgba(217,164,187,0.7120973389355743) 2%, rgba(254,174,105,1) 100%)",
  "linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
  "linear-gradient(177deg, rgba(221,48,83,1) 35%, rgba(255,0,241,1) 80%)"
]

type RecentShelvesProps = {
  recentShelves: IBookShelves[];
}

const RecentShelves = ({ recentShelves }: RecentShelvesProps) => {
  const { updateShelveArticle, currentArticle } = useContext(Context) as IContext;

  return (
    <div className="flex flex-col gap-1 mt-1 divide-[#DBC9E5] divide-[1px]">
      <p className="text-[15px]">Recent</p>
      <div className="flex justify-between mr-3">
        {recentShelves.map((item, index) => (
          <div className={`w-[66px] mr-3 cursor-pointer ${index === 0 ? 'shadow bg-[#DFE3EE] p-2 rounded-lg' : ''}`} key={item.name} onClick={() => updateShelveArticle(currentArticle?.articleURL, item.name, item.numberOfArticles)}>
          <div className={`rounded-sm ${index ===0 ? 'w-12 h-12' : 'w-16 h-16'}`} style={{background: backgroundColors[index]}}/>
            <p className="text-[12px] w-16 my-1" style={{lineHeight: "12px"}}>
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <hr className="w-[409px] ml-[-12px] bg-[#DBC9E5]"/>
    </div>
  )
}

export default RecentShelves;