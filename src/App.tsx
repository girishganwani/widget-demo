import { useState } from "react"
import LoadingScreen from "./components/LoadingScreen"
import FullWidget from "./components/FullWidget"


function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div className="font-Raleway">
      {isLoading ? 
      <LoadingScreen isLoading={isLoading}/> : 
      <FullWidget isLoading={isLoading}/>
      }
    </div>
  )
}

export default App
