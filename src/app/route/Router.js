import React from 'react'
import { Routes , Route

 } from 'react-router-dom'
import FriendReferred from '../container/FriendReferred'
import ReferAndEarn from '../container/ReferAndEarn'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ReferAndEarn/>} />
      <Route path="/referred-friends" element={<FriendReferred/>} />
      
    </Routes>
  )
}

export default Router