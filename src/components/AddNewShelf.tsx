import { FormEvent, useState } from "react";
import useCacheQuery from "../hooks/useCacheQuery";
import { IBookShelves } from "../types/interfaces";

const AddNewShelf = () => {
  const [bookshelfName, setBookShelfName] = useState("");
  const { axiosRequest: saveBookShelvesAxiosRequest, loading: saveBookShelfLoading } = useCacheQuery<IBookShelves[]>({ 
    requestConfig: {
      method: 'POST',
      url: '/addbookshelf',
      cacheKey: 'bookShelves',
    }
  });

const handleSubmit = async (e : FormEvent<HTMLElement>) => {
  e.preventDefault();
  await saveBookShelvesAxiosRequest({body: {
    id: "fsfsfsf",
    name: bookshelfName,
    articleNo :11
  }});
  setBookShelfName("");
}

  return (
    <div className="mt-3 flex flex-col gap-2">
      <p className="text-[15px] ">Create New Shelf</p>
      <form onSubmit={handleSubmit}>
        <label className="text-[10px]">Name</label>
        <input
          type="text"
          onChange={(e) => setBookShelfName(e.target.value)}
          placeholder="Name this bookshelf"
          className="w-[379px] h-[28px] bg-[#EDEFF8] boder-[1px] outline-none placeholder:text-[#C3D7FF] px-1 text-[9px] text-black border-[#C3D7FF] border-[1px] rounded-sm "
          />
        <button 
        type="submit"
        className="bg-[#940FAF] text-white mt-2 text-[10px] font-medium w-[194px] h-[18px] mx-auto rounded-sm"
        >
          Create Shelf
        </button>
      </form>
    </div>
  )
}

export default AddNewShelf