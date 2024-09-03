
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Users from './pages/Users'
import Posts from './pages/Posts'
import Comments from './components/Comments'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/users' element={<Users/>}/> 
      <Route path='/users/:userId' element={<Posts/>}/> 
      <Route path='/users/:userId/:postId' element={<Comments/>}/> 
      <Route path="*" element={<Notfound/>}/>
     </Routes>
  )
}

export default Router

