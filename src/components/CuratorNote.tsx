import { IoMdClose } from "react-icons/io"

type CuratorNoteProps = {
  setIsCuratorNote: React.Dispatch<React.SetStateAction<boolean>>;
}

const CuratorNote = ({ setIsCuratorNote }: CuratorNoteProps) => {
  return (
    <div className="w-[389px] mx-auto mb-3 rounded-xl flex flex-col p-2 bg-[#FBF9FC] gap-3">
      <div className="divide-[#9FBAE5]">
        <div className="flex items-center justify-between text-[18px] text-[#940FAF] font-semibold">
          <h1>Curator's Note</h1>
          <IoMdClose className="cursor-pointer" onClick={() => setIsCuratorNote(false)} />
        </div>
        <hr className="w-[389px] -ml-2"/>
      </div>
      <textarea rows={6} className="text-[9px] w-[372px]"/>
      <button 
      className="w-[61px] h-[13px] text-[10px] font-semibold bg-[#9FBAE5] text-[#504874] ml-auto"
      >
        Save Note
      </button>
    </div>
  )
}

export default CuratorNote