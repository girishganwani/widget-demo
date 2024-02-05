import LoadingSpinner from "./LoadingSpinner"
import PinButton from "./PinButton"
import { RiDeleteBinLine } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";

const LoadingScreen = ({isLoading}: {isLoading:boolean}) => {
  return (
    <div className="w-[411px] h-[155px] bg-[#edddf3] rounded-xl flex flex-col justify-between border-[1px] border-[#504874]">
      <div className="flex justify-between items-center mr-3">
        <PinButton/>
        {!isLoading && 
        <button><RiDeleteBinLine fontSize={16} color="#504874" fontWeight={600}/></button>}
      </div>
      <div className="flex items-center gap-4">
        <p className="text-[23px] font-bold text-[#940FAF] ml-3 font-Anonymous">Archiving URLs</p>
        {isLoading && <LoadingSpinner/>}
      </div>
      <div className="text-[12px] font-Raleway font-semibold text-[#504874] mb-[14px] mx-3 flex justify-between items-center">
      <p>on gwern.net</p>
      {!isLoading && 
      <button className="flex gap-1 items-center">
        <LuPencilLine fontSize={20}/>
      Add Note
      </button>}
      </div>
    </div>
  )
}

export default LoadingScreen