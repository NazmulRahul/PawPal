import { Route, Routes } from "react-router-dom"
import ParentLayout from "./Components/Layout/ParentLayout"
import Home from "./Pages/Home"
import { useState, useEffect } from "react";
import Adoption from "./Pages/Adoption";
import PetList from "./Components/Adoption/PetList";
import AdoptionReqeustForm from "./Components/Adoption/AdoptionReqeustForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ParentLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="adoption" element={<Adoption/>}>
          <Route index element={<PetList/>}/>
          <Route path="request" element={<AdoptionReqeustForm/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
