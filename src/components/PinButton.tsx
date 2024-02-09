import { TbPinnedFilled } from "react-icons/tb";

const PinButton = () => {
  return (
    <button className="bg-[#9FBAE5] font-Raleway flex items-center font-semibold text-[13px] justify-center w-[110px] h-[37px] text-[#940FAF] rounded-ss-xl rounded-ee-xl gap-1 cursor-default">
      <TbPinnedFilled fontSize={22}/>
      tab pinned
    </button>
  )
}

export default PinButton