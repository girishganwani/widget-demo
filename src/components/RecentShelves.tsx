const recent = [
  {
    topic: "Social Software",
    imageUrl: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    topic: "Writing on Writing",
    imageUrl: "https://images.unsplash.com/photo-1557682260-96773eb01377?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    topic: "Internet Politics",
    imageUrl: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    topic: "WTF are zkproofs??",
    imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbG9yfGVufDB8fDB8fHww"
  }
]

const RecentShelves = () => {
  return (
    <div className="flex flex-col gap-1 mt-1">
      <p className="text-[10px]">Recent</p>
      <div className="flex justify-between">
        {recent.map(item => (
          <div className="w-[35px]">
            <img
            src={item.imageUrl} 
            alt={item.topic}
            className="h-[35px] rounded-sm"
            />
            <p className="text-[7px] my-1">
              {item.topic}
            </p>
          </div>
        ))}
      </div>
      <hr className="w-[193px] ml-[-12px] bg-[#DBC9E5]"/>
    </div>
  )
}

export default RecentShelves