import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import AdminDashboard from "./pages/Admin/Admin";
import Login from "./pages/Auth/Login";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/HeroSection/Home";
import Showcase from "./pages/Showcase/Showcase";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check if user is logged in
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // Get the current route

  // Check if the current route is "/admin"
  const isAdminRoute = location.pathname === "/admin";

  return (
    <>
      {/* Conditionally render Navbar */}
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      {/* Conditionally render Footer */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;