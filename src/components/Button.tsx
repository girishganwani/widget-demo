import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

type ButtonProps = {
 title : string
 setShowPersonalLibModal ?: any
 showPersonalLibModal ?: boolean;
 style?: any;
}

export const Button = ({ title, setShowPersonalLibModal, showPersonalLibModal, style }: ButtonProps) => {
  return (
    <button 
    style={style}
    className={`flex items-center w-[193px] h-[47px] justify-center text-[#940FAF] font-medium bg-white border-[#DBC9E5] text-[18px] gap-[2px] ${showPersonalLibModal? 'rounded-t-xl' : 'rounded-xl'} border-[1px]`}
    onClick={() => setShowPersonalLibModal(!showPersonalLibModal)}
    >
      {title}
      {showPersonalLibModal ? 
      <IoMdArrowDropup fontSize={25} className='mt-[2px] text-[#504874]'/> :
      <IoMdArrowDropdown fontSize={25} className='mt-[2px] text-[#504874]'/>
    }
    </button>
  )
}