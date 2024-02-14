import { useContext, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { IContext } from "../types/interfaces";
import Context from "../context";

type CuratorNoteProps = {
  setIsCuratorNote: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
};

const CuratorNote = ({ setIsCuratorNote, value }: CuratorNoteProps) => {
  const { updateArticle, currentArticle, setCurrentArticle } = useContext(Context) as IContext;
  const noteRef = useRef<HTMLTextAreaElement>(null);

  const addCuratorNote = () => {
    const curatorNote = noteRef.current?.value;
    if (curatorNote && currentArticle?.articleURL) {
      const updateData = {
        ...currentArticle,
        curatorNote,
      };
      updateArticle(currentArticle.articleURL, updateData);
      setCurrentArticle(updateData)
      setIsCuratorNote(false);
    }
    else {
      alert('Please add a note');
      noteRef.current?.focus();
    }
  }

  return (
    <div className="w-[389px] mx-auto mb-3 -mt-5 rounded-xl flex flex-col p-2 bg-[#FBF9FC] gap-3">
      <div className="divide-[#9FBAE5]">
        <div className="flex items-center justify-between text-[18px] text-[#940FAF] font-semibold">
          <h1>Curator's Note</h1>
          <IoMdClose className="cursor-pointer" onClick={() => setIsCuratorNote(false)} />
        </div>
        <hr className="w-[389px] -ml-2"/>
      </div>
      {value ? <p>{value}</p> : (
        (
          <>
            <textarea rows={6} className="text-[15px] w-[372px] p-1" ref={noteRef} />
            <button
              className="w-[70px] h-4 text-[13px] font-semibold flex p-[3px] items-center bg-[#9FBAE5] text-[#504874] ml-auto"
              onClick={addCuratorNote}
            >
              Save Note
            </button>
          </>  
        )
      )}
    </div>
  );
};

export default CuratorNote;
