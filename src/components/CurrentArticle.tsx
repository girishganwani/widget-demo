import LoadingSpinner from "./LoadingSpinner"
import PinButton from "./PinButton"
import { RiDeleteBinLine } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import { useContext, useState } from "react";
import Context from "../context";
import { IContext } from "../types/interfaces";
import CuratorNote from "./CuratorNote";

const CurrentArticle = () => {
  const [isCuratorNote, setIsCuratorNote] = useState(false);
  const { currentArticle, saveUrlLoading: isLoading, handleDelete } = useContext(Context) as IContext;

  return (
    <div className="w-[411px] min-h-[155px] bg-[#edddf3] rounded-xl flex flex-col justify-between border-[1px] border-[#504874]">
      <div className="flex justify-between items-center mr-3">
        <PinButton/>
        {!isLoading && 
        <button><RiDeleteBinLine fontSize={16} color="#504874" fontWeight={600} onClick={() => handleDelete(currentArticle!.id as string)} /></button>}
      </div>
      <div className="flex items-center gap-4">
        <p className="text-[23px] font-bold text-[#940FAF] ml-3 font-Anonymous">{currentArticle?.title}</p>
        {isLoading && <LoadingSpinner/>}
      </div>
      <div className="text-[12px] font-Raleway font-semibold text-[#504874] mb-[14px] mx-3 flex justify-between items-center">
      <p>{currentArticle?.website}</p>
      {!isLoading && 
      <button className="flex gap-1 items-center" onClick={() => setIsCuratorNote(!isCuratorNote)}>
        <LuPencilLine fontSize={20}/>
        Add Note
      </button>}
      </div>
      {!isLoading && isCuratorNote && <CuratorNote setIsCuratorNote={setIsCuratorNote} />}
    </div>
  )
}

export default CurrentArticle;