import AllShelves from "./AllShelves"
import RecentShelves from "./RecentShelves"

const PersonalLibModal = () => {
  return (
    <div className="absolute z-10 w-[409px] h-[288px] bg-white p-3 pt-0 rounded-xl border-[1px] border-[#DBC9E5]">
      <RecentShelves/>
      <AllShelves/>
    </div>
  )
}

export default PersonalLibModal