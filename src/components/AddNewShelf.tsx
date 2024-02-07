const AddNewShelf = () => {
  return (
    <div className="mt-3 flex flex-col gap-2">
      <p className="text-[15px] ">Create New Shelf</p>
      <label className="text-[10px]">Name</label>
       <input
         type="text" 
         placeholder="Name this bookshelf"
         className="w-[379px] h-[28px] bg-[#EDEFF8] boder-[1px] outline-none placeholder:text-[#C3D7FF] px-1 text-[9px] text-black border-[#C3D7FF] border-[1px] rounded-sm "
        />
      <button className="bg-[#940FAF] text-white mt-2 text-[10px] font-medium w-[194px] h-[18px] mx-auto rounded-sm">
        Create Shelf
      </button>
    </div>
  )
}

export default AddNewShelf