import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import SignUp from "./pages/SignUp.jsx"

function RootApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report-lost" element={<div>Lost Form</div>} />
      <Route path="/report-found" element={<div>Found Form</div>} />
      <Route path="/browse" element={<div>Browse Items</div>} />
      <Route path="/login" element={<div>Login</div>} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default RootApp
