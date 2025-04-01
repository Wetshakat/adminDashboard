import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Activity from '../components/main/Activity'


const Home = () => {
  return (
    <div className="flex">
        
      <Sidebar/>
      <Activity/>

    </div>
  )
}

export default Home