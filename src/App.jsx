import Sidebar from "./components/layout/Sidebar"
import Activity from "./components/main/Activity"
import React from "react"
function App() {

  return (
    <>
     <div className="flex">
      <Sidebar/>
      <Activity/>

     </div>
    </>
  )
}

export default App
