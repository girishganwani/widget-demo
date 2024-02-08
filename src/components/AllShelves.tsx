import { useState } from "react"
import { LuPlus } from "react-icons/lu"
import AddNewShelf from "./AddNewShelf"
import { IBookShelves } from "../types/interfaces"

const AllShelves = ({ allShelves }: { allShelves: IBookShelves[] }) => {
  const [isNewShelfClicked, setIsNewShelfClicked] = useState(false)
  return (
    <div>
      {isNewShelfClicked ? 
      <AddNewShelf/> : 
      <div className="flex flex-col mt-1 gap-1">
      <p className="text-[15px]">All Shelves</p>
        <div className="flex flex-wrap">
            {allShelves.map(item => (
              <div className="h-[36px] w-1/3 flex flex-row mb-2" key={item.id}>
              <img 
              src="https://images.unsplash.com/photo-1557682260-96773eb01377?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvbG9yJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
              alt={item.name}
              className="w-[42px] h-[36px] rounded-sm p-[1px]"
              />
              <div className="w-[105px] h-[36px]">
                <p className="text-[13px]">{item.name}</p>
                <p className="text-[10px]">{`${item.articleNo} articles`}</p>
              </div>
            </div>
          ))}
        </div>
        <button
        className="w-[59px] h-[17px] rounded-md flex items-center  ml-auto mt-2 justify-center text-white bg-[#940FAF] text-[8px] font-medium"
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