import { useState } from "react"
import { LuPlus } from "react-icons/lu"
import AddNewShelf from "./AddNewShelf"

const allShelves = [
  {
    name: "Unsorted",
    numberOfArticles: 16,
    imageUrl: "https://images.unsplash.com/photo-1503455637927-730bce8583c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Read Later",
    numberOfArticles: 23,
    imageUrl: "https://images.unsplash.com/photo-1560355206-7bdbaa06ea8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Psychedelic Psychoanalysis",
    numberOfArticles: 19,
    imageUrl: "https://images.unsplash.com/photo-1557682260-96773eb01377?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvbG9yJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "All About Bonds",
    numberOfArticles: 37,
    imageUrl: "https://images.unsplash.com/photo-1436262513933-a0b06755c784?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGNvbG9yJTIwYmFja2dyb3VuZCUyMHllbGxvfGVufDB8fDB8fHww"
  },
]

const AllShelves = () => {
  const [isNewShelfClicked, setIsNewShelfClicked] = useState(false)
  return (
    <div>
      {isNewShelfClicked ? 
      <AddNewShelf/> : 
      <div className="flex flex-col mt-2 gap-1">
      <p className="text-[10px]">All Shelves</p>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
            {allShelves.map(item => (
              <div className="h-[21px] flex gap-1">
              <img 
              src={item.imageUrl} 
              alt={item.name}
              className="w-[25px] rounded-sm p-[1px]"
              />
              <div className="text-[6px]">
                <p>{item.name}</p>
                <p>{item.numberOfArticles}</p>
              </div>
            </div>
          ))}
        </div>
        <button
        className="w-[59px] h-[17px] rounded-md flex items-center justify-center place-self-end text-white bg-[#940FAF] text-[8px] font-medium"
        onClick={() => setIsNewShelfClicked(true)}
        >
          <LuPlus fontSize={11}/>
          New Shelf
        </button>
      </div>
    </div>
       }
      
    </div>
  )
}

export default AllShelves