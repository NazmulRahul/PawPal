import { Route, Routes } from "react-router-dom"
import ParentLayout from "./Components/Layout/ParentLayout"
import Home from "./Pages/Home"
import { useState, useEffect } from "react";
import Adoption from "./Pages/Adoption";
import PetList from "./Components/Adoption/PetList";
import AdoptionReqeustForm from "./Components/Adoption/AdoptionReqeustForm";
import PetAdoptionDetails from "./Pages/PetAdoptionDetails";
import Transport from "./Pages/Transport";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import Auth from "./Pages/Auth";
import SingleService from "./Components/Transport/SingleService";
import TransportProcedure from "./Components/Transport/TransportProcedure";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ParentLayout/>}>
        <Route path="auth" element={<Auth/>}>
          <Route index element={<SignIn/>}/>
          <Route path="login" element={<SignIn/>}/>
          <Route path="register" element={<SignUp/>}/>
        </Route>
        <Route index element={<Home/>}/>
        <Route path="adoption" element={<Adoption/>}>
          <Route index element={<PetList/>}/>
          <Route path="request" element={<AdoptionReqeustForm/>}/>
        </Route>
        <Route path="adoption/:petId" element={<PetAdoptionDetails/>}/>
        <Route path="transport" element={<Transport/>}/>
        <Route path="transport/service/:serviceId" element={<SingleService/>}/>
        <Route path="transport/booking" element={<TransportProcedure/>}/>
      </Route>
    </Routes>
  )
}

export default App
