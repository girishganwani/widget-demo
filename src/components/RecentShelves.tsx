import { IBookShelves } from "../types/interfaces";

const RecentShelves = ({ recentShelves }: { recentShelves: IBookShelves[] }) => {
  return (
    <div className="flex flex-col gap-1 mt-1 divide-[#DBC9E5] divide-[1px]">
      <p className="text-[15px]">Recent</p>
      <div className="flex justify-between mx-3">
        {recentShelves.map(item => (
          <div className="w-[66px] mr-3" key={item.id}>
            <img
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbG9yfGVufDB8fDB8fHww" 
            alt={item.name}
            className="h-14 w-14 rounded-sm"
            />
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