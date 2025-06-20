// App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center text-gray-700">
              Welcome to Lost & Found
            </h1>
            <p className="text-center mt-4">This is the homepage content.</p>
          </div>
        } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
// export default function App() {
//   return <h1 style={{ textAlign: 'center', marginTop: '100px' }}>Hello React</h1>;
// }
