import { useState } from "react"
import LoadingScreen from "./components/LoadingScreen"
import FullWidget from "./components/FullWidget"
// import Test from "./components/Test"


function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  return (
    <div className="font-Raleway">
      {isLoading ? 
      <LoadingScreen isLoading={isLoading}/> : 
      <FullWidget isLoading={isLoading}/>
      }
      {/* <Test/> */}
    </div>
  )
}

export default App
