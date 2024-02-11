import { useContext, useEffect, useState } from "react";
import useCacheQuery from "../hooks/useCacheQuery";
import { IBookShelves, IContext } from "../types/interfaces";
import AllShelves from "./AllShelves"
import RecentShelves from "./RecentShelves"
import Context from "../context";

const PersonalLibModal = () => {
  const { authToken } = useContext(Context) as IContext;

  const { data: allBookShelves, axiosRequest: fetchBookShelvesAxiosRequest } = useCacheQuery<IBookShelves[]>({ 
    requestConfig: {
      method: 'GET',
      url: '/v1/bookshelves',
      cacheKey: 'bookShelves',
    },
    authToken,
  });

  const [ shelves, setShelves ] = useState(allBookShelves || []);

  useEffect(() => {
    if (authToken) {
      fetchBookShelvesAxiosRequest();
    }
  },[authToken])

  useEffect(() => {
    if (allBookShelves?.length) {
      setShelves(allBookShelves);
    }
  }, [allBookShelves])

  const recentShelves = shelves?.slice(0, 4) || [];
  const allShelves = shelves?.slice(4) || [];
  return (
    <div className="absolute z-10 w-[409px] min-h-[310px] bg-white p-3 pt-0 rounded-xl border-[1px] border-[#DBC9E5]">
      <RecentShelves recentShelves={recentShelves}/>
      <AllShelves setShelves={setShelves} allShelves={allShelves} shelves={shelves} />
    </div>
  )
}

export default PersonalLibModal