import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import SignUp from "./pages/Signup.jsx"
import Login  from "./pages/Login.jsx"
import Layout from "./Layout.jsx"
import LostReportForm from "./pages/LostReportForm.jsx"
import FoundReportForm from "./pages/FoundReportForm.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import FoundItems from "./pages/FoundItems.jsx"
import LostItems from "./pages/LostItems.jsx"

function RootApp() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/report-lost" element={<LostReportForm />} />
      <Route path="/report-found" element={<FoundReportForm Form/>} />
      <Route path="/browse" element={<div>Browse Items</div>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/found-items" element={<FoundItems/>}/>
      <Route path="/lost-items" element={<LostItems/>}/>
      </Route>
    </Routes>
  )
}

export default RootApp
