
const AddNewShelf = () => {
  return (
    <div className="mt-3 flex flex-col gap-1">
      <p className="text-[10px] ">Create New Shelf</p>
        <label className="text-[7px]">Name</label>
        <input
         type="text" 
         placeholder="Name this bookshelf"
         className="w-[172px] h-[12px] bg-[#EDEFF8] boder-[1px] outline-none placeholder:text-black px-1 text-[5px] text-black border-[#CBDCFE] rounded-sm "
         />
      <button className="bg-[#940FAF] text-white mt-2 text-[6px] font-medium w-[80px] h-[10px] mx-auto rounded-sm">
        Create Shelf
      </button>
    </div>
  )
}

export default AddNewShelf