import { FormEvent, useContext, useState } from "react";
import useCacheQuery from "../hooks/useCacheQuery";
import { IBookShelves, IContext } from "../types/interfaces";
import Context from "../context";

type AddNewShelfProps = {
  setIsNewShelfClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isNewShelfClicked: boolean;
  setShelves: React.Dispatch<React.SetStateAction<IBookShelves[]>>;
  shelves: IBookShelves[]
}

const AddNewShelf = ({ setIsNewShelfClicked, isNewShelfClicked, setShelves, shelves }: AddNewShelfProps) => {
  const { authToken } = useContext(Context) as IContext;
  const [bookshelfName, setBookShelfName] = useState("");
  const { axiosRequest: saveBookShelvesAxiosRequest, loading: saveBookShelfLoading } = useCacheQuery<IBookShelves>({ 
    requestConfig: {
      method: 'POST',
      url: '/v1/bookshelves/private',
      cacheKey: 'bookShelves',
    }
  });

const handleSubmit = async (e : FormEvent<HTMLElement>) => {
  e.preventDefault();
  if (bookshelfName) {
    await saveBookShelvesAxiosRequest({
      body: {
        newBookshelfName: bookshelfName,
      },
      authToken,
      articleData: {
        newBookshelfName: bookshelfName,
        name: bookshelfName,
        numberOfArticles: 0,
      }
    });
    setShelves(
      [
        ...shelves,
        {
          newBookshelfName: bookshelfName,
          name: bookshelfName,
          numberOfArticles: 0,
        }
      ]
    );
  }
  else {
    alert('Please enter a book shelve name')
  }
  setBookShelfName("");
  setIsNewShelfClicked(!isNewShelfClicked);
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
          className="bg-[#940FAF] text-white mt-2 text-[12px] font-medium w-[194px] h-[18px] ml-[90px] rounded-sm"
          disabled={saveBookShelfLoading}
        >
          Create Shelf
        </button>
      </form>
    </div>
  )
}

export default AddNewShelf;
