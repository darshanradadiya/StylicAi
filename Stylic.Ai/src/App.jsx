import React, { useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./Components/Navbar";
import About from "./pages/About/About";
import AdminDashboard from "./pages/Admin/Admin";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/HeroSection/Home";
import Showcase from "./pages/Showcase/Showcase";
import Login from "./pages/Auth/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // PrivateRoute component to protect admin routes
  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <AppContent
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        PrivateRoute={PrivateRoute} // Pass PrivateRoute as a prop
      />
    </Router>
  );
}

function AppContent({ isLoggedIn, setIsLoggedIn, PrivateRoute }) {
  const location = useLocation(); // Now inside the Router context

  // Check if the current route is "/admin"
  const isAdminRoute = location.pathname === "/admin";

  return (
    <>
      {/* Conditionally render Navbar */}
      {!isAdminRoute && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
      {/* Conditionally render Footer */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;