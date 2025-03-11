import { Route, Routes } from "react-router-dom"
import ParentLayout from "./Components/Layout/ParentLayout"
import Home from "./Pages/Home"
function App() {

  return (
    <Routes>
      <Route path="/" element={<ParentLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App
