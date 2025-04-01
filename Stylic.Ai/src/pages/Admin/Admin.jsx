import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AdminGarments from "./AdminGarments";
import AnalyticsDashboard from "./AnalyticsDashboard";
import axios from "axios";
import { logout } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const TABS = [
  "Users",
  "Contacts",
  "Garments",
  "AI Processing",
  "Analytics",
  "E-commerce",
];
const API_URL = import.meta.env.VITE_API_URL; // Ensure .env file contains VITE_API_URL

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Users");
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeTab === "Users") {
      fetchUsers();
    } else if (activeTab === "Contacts") {
      fetchContacts();
    }
  }, [activeTab]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${API_URL}/contacts`);
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts", error);
    }
  };

  const handleLogout = () => {
    logout(navigate);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Users":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">User Management</h3>
            <ul>
              {users.map((user) => (
                <li key={user.id} className="border p-2 rounded-lg mb-2">
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        );
      case "Contacts":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Messages</h3>
            <ul>
              {contacts.map((contact) => (
                <li key={contact._id} className="border p-2 rounded-lg mb-2">
                  <strong>{contact.name}</strong> - {contact.email} <br />
                  {contact.message}
                </li>
              ))}
            </ul>
          </div>
        );
      case "Garments":
        return <AdminGarments />;
      case "AI Processing":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">
              AI Processing Monitoring
            </h3>
            <ul>
              <li>🔹 Track AI processing speed & errors</li>
              <li>🔹 Override AI results manually</li>
              <li>🔹 Optimize image quality</li>
            </ul>
          </div>
        );
      case "Analytics":
        return <AnalyticsDashboard />;
      case "E-commerce":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">E-commerce Control</h3>
            <ul>
              <li>🔹 Approve garments for selling</li>
              <li>🔹 Manage commission-based sales</li>
              <li>🔹 View sales reports</li>
            </ul>
          </div>
        );
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-64 bg-gradient-to-b from-blue-600 to-purple-700 text-white p-6 shadow-lg flex flex-col"
      >
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          {TABS.map((tab) => (
            <motion.li
              key={tab}
              whileHover={{ scale: 1.05 }}
              className={`cursor-pointer p-3 rounded-lg transition-all duration-300 ${
                activeTab === tab
                  ? "bg-white text-blue-600"
                  : "hover:bg-white/20"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </motion.li>
          ))}
        </ul>
        <button
          onClick={handleLogout}
          className="mt-6 p-2 bg-red-600 hover:bg-red-700 rounded-lg text-white"
        >
          Logout
        </button>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex items-center justify-center p-4 md:p-8"
      >
        <div className="bg-white p-4 md:p-8 shadow-2xl rounded-xl w-full max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{activeTab}</h2>
          {renderContent()}
        </div>
      </motion.div>
    </div>
  );
}
