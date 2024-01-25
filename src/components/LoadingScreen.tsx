import LoadingSpinner from "./LoadingSpinner"
import PinButton from "./PinButton"

const LoadingScreen = () => {
  return (
    <div className="w-[411px] h-[155px] bg-[#edddf3] rounded-xl flex flex-col justify-between border-[1px] border-[#504874]">
      <PinButton/>
      <div className="flex items-center gap-4">
        <p className="text-[23px] font-bold text-[#940FAF] ml-3 font-Anonymous">Archiving URLs</p>
        <LoadingSpinner/>
      </div>
      <p className="text-[12px] font-Raleway font-semibold text-[#504874] mb-[18px] ml-3">on gwern.net</p>
    </div>
  )
}

export default LoadingScreen