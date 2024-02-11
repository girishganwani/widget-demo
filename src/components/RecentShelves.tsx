import { IBookShelves } from "../types/interfaces";

const backgroundColors = [
  "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(48,76,137,1) 71%)",
  "linear-gradient(180deg, rgba(217,164,187,0.7120973389355743) 2%, rgba(254,174,105,1) 100%)",
  "linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
  "linear-gradient(177deg, rgba(221,48,83,1) 35%, rgba(255,0,241,1) 80%)"
]

const RecentShelves = ({ recentShelves }: { recentShelves: IBookShelves[] }) => {
  return (
    <div className="flex flex-col gap-1 mt-1 divide-[#DBC9E5] divide-[1px]">
      <p className="text-[15px]">Recent</p>
      <div className="flex justify-between mr-3">
        {recentShelves.map((item, index) => (
          <div className="w-[66px] mr-3" key={item.name}>
            <div className="h-14 w-14 rounded-sm" style={{background: backgroundColors[index]}}/>
            <p className="text-[12px] w-14 my-1" style={{lineHeight: "12px"}}>
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