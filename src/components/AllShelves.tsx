import { useState } from "react"
import { LuPlus } from "react-icons/lu"
import AddNewShelf from "./AddNewShelf"
import { IBookShelves } from "../types/interfaces"

const backgroundColors = [
  "linear-gradient(90deg, rgba(191,137,175,1) 0%, rgba(217,133,148,1) 100%)",
  "linear-gradient(153deg, rgba(0,69,33,1) 0%, rgba(0,136,73,1) 100%)",
  "linear-gradient(34deg, rgba(242,143,44,1) 0%, rgba(223,76,45,1) 100%)",
  "background: linear-gradient(171deg, rgba(242,143,44,1) 0%, rgba(241,213,0,1) 80%)",
  "linear-gradient(171deg, rgba(44,178,242,1) 0%, rgba(241,222,0,1) 85%)",
  "linear-gradient(174deg, rgba(107,28,161,1) 0%, rgba(171,111,236,1) 52%, rgba(107,28,161,1) 100%)",
  "linear-gradient(174deg, rgba(34,195,185,1) 13%, rgba(68,102,221,0.7877275910364145) 100%)",
  "linear-gradient(174deg, rgba(221,48,83,1) 18%, rgba(205,197,27,1) 80%)"
]

const AllShelves = ({ allShelves }: { allShelves: IBookShelves[] }) => {
  const [isNewShelfClicked, setIsNewShelfClicked] = useState(false)
  const selectBackground = () => {
    const randomIndex =  Math.floor(Math.random() * backgroundColors.length);
    console.log("RandomIndex : ", randomIndex);
    return randomIndex;
  }
  return (
    <div>
      {isNewShelfClicked ? 
      <AddNewShelf/> : 
      <div className="flex flex-col mt-1 gap-1">
      <p className="text-[15px]">All Shelves</p>
        <div className="flex flex-wrap items-center">
            {allShelves.map(item => (
      
              <div className="h-10 w-1/3 flex flex-row mb-4 gap-1" key={item.id}>
                <div className="w-11 h-11 rounded-sm" style={{background: backgroundColors[selectBackground()]}}/>
                <div className="w-16 h-[36px] m-[1px] my-auto" style={{lineHeight: "14px"}}>
                  <p className="text-[13px] line-clamp-2">{item.name}</p>
                  <p className="text-[10px]">{`${item.articleNo} articles`}</p>
                </div>
            </div>
          ))}
        </div>
        <button
        className="w-[59px] h-[17px] rounded-md flex items-center  ml-auto justify-center text-white bg-[#940FAF] text-[8px] font-medium"
        onClick={() => setIsNewShelfClicked(true)}
        >
          <LuPlus fontSize={11}/>
          New Shelf
        </button> 
    </div>
       }
      
    </div>
  )
}

export default AllShelves