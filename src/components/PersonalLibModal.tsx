import { useContext, useEffect, useState } from "react";
import { IContext } from "../types/interfaces";
import AllShelves from "./AllShelves"
import RecentShelves from "./RecentShelves"
import Context from "../context";

const PersonalLibModal = () => {
  const { authToken, allBookShelves, fetchBookShelvesAxiosRequest } = useContext(Context) as IContext;

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
  }, [allBookShelves]);

  const recentShelves = shelves?.slice(0, 4) || [];
  const allShelves = shelves?.slice(4) || [];
  return (
    <div className="absolute z-50 w-[409px] bg-white p-3 pt-0 rounded-b-xl rounded-se-xl border-[1px] border-[#DBC9E5]">
      <RecentShelves recentShelves={recentShelves}/>
      <AllShelves setShelves={setShelves} allShelves={allShelves} shelves={shelves} />
    </div>
  )
}

export default PersonalLibModal;
