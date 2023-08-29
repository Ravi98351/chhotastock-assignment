import React from 'react'
import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'
import { Routes,Route } from 'react-router'
// import {Route,Routes} from 'react-router-dom'
   
export default function Allroutes() {


  return (
    <Routes>
      <Route path="/" element={<Page1/>}></Route>
      <Route path="/login" element={<Page2/>}></Route>
    </Routes>
  )
}
