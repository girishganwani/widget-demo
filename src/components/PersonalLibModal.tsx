import AllShelves from "./AllShelves"
import RecentShelves from "./RecentShelves"

const PersonalLibModal = () => {
  return (
    <div className="w-[193px] bg-white p-3 pt-0 rounded-b-xl border-[1px] border-[#DBC9E5] backdrop-blur-sm">
      <RecentShelves/>
      <AllShelves/>
    </div>
  )
}

export default PersonalLibModal