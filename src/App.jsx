import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import SignUp from "./pages/Signup.jsx"
import Login  from "./pages/Login.jsx"
import LostReportForm from "./pages/LostReportForm.jsx"
import FoundReportForm from "./pages/FoundReportForm.jsx"

function RootApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report-lost" element={<LostReportForm />} />
      <Route path="/report-found" element={<FoundReportForm Form/>} />
      <Route path="/browse" element={<div>Browse Items</div>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default RootApp
