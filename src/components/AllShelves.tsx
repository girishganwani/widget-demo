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
      <div className="flex flex-col mt-1 gap-1">
      <p className="text-[15px]">All Shelves</p>
        <div className="flex flex-wrap">
            {allShelves.map(item => (
              <div className="h-[36px] w-1/3 flex flex-row mb-2">
              <img 
              src={item.imageUrl} 
              alt={item.name}
              className="w-[42px] h-[36px] rounded-sm p-[1px]"
              />
              <div className="w-[105px] h-[36px]">
                <p className="text-[13px]">{item.name}</p>
                <p className="text-[10px]">{`${item.numberOfArticles} articles`}</p>
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