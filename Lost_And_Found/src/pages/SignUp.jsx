import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import InputField from "../components/InputField"

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
    } else {
      alert("Signup Successful!")
      navigate("/login")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField label="Full Name" icon="user" name="fullName" value={formData.fullName} onChange={handleChange} required />
          <InputField label="Email" icon="mail" type="email" name="email" value={formData.email} onChange={handleChange} required />
          <InputField label="Phone" icon="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          <InputField label="Password" icon="lock" type="password" name="password" value={formData.password} onChange={handleChange} required />
          <InputField label="Confirm Password" icon="lock" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
            Create Account
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  )
}

