import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import User from './User'

function Pages() {
      const location = useLocation();
  return (
    <div>
     <Routes location={location} key={location.pathname}>
   <Route path="/searched/:search" element={<User/>} />
    </Routes>
    </div>
  )
}

export default Pages