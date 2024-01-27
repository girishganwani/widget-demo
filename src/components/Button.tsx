import { IoMdArrowDropdown } from 'react-icons/io'

type ButtonProps = {
 title : string
}

export const Button = ({title}: ButtonProps) => {
  return (
    <button className='flex items-center w-[193px] h-[47px] justify-center text-[#940FAF] font-medium bg-white border-[#DBC9E5] text-[18px] gap-[2px] rounded-xl border-[1px]'>
          {title}
          <IoMdArrowDropdown fontSize={25} className='mt-[2px] text-[#504874]'/>
        </button>
  )
}
