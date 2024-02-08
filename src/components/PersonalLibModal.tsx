import { useEffect } from "react";
import useCacheQuery from "../hooks/useCacheQuery";
import { IBookShelves } from "../types/interfaces";
import AllShelves from "./AllShelves"
import RecentShelves from "./RecentShelves"

const PersonalLibModal = () => {
  const { data: allBookShelves, axiosRequest: fetchBookShelvesAxiosRequest } = useCacheQuery<IBookShelves[]>({ 
    requestConfig: {
      method: 'GET',
      url: '/bookshelves',
      cacheKey: 'bookShelves',
    }
  });

  useEffect(() => {
    fetchBookShelvesAxiosRequest();
  },[])

  console.log("BookShelves: ", allBookShelves)

  const recentShelves = allBookShelves?.slice(0, 4) || [];
  const allShelves = allBookShelves?.slice(4) || [];
  return (
    <div className="absolute z-10 w-[409px] h-[288px] bg-white p-3 pt-0 rounded-xl border-[1px] border-[#DBC9E5]">
      <RecentShelves recentShelves={recentShelves}/>
      <AllShelves allShelves={allShelves}/>
    </div>
  )
}

export default PersonalLibModal