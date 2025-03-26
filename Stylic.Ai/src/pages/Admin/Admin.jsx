import { useState } from "react";
import { motion } from "framer-motion";
import AdminGarments from "./AdminGarments";
import AnalyticsDashboard from "./AnalyticsDashboard";

const TABS = ["Users", "Garments", "AI Processing", "Analytics", "E-commerce"];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Users");

  const renderContent = () => {
    switch (activeTab) {
      case "Users":
        return (
          <div className="text-gray-700 text-lg">
            <h3 className="text-xl font-semibold mb-4">User Management</h3>
            <ul>
              <li>🔹 View and manage registered users</li>
              <li>🔹 Block/unblock accounts</li>
              <li>🔹 Monitor uploaded garments</li>
            </ul>
          </div>
        );
      case "Garments":
        return <AdminGarments />;
      case "AI Processing":
        return (
          <div className="text-gray-700 text-lg">
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
          <div className="text-gray-700 text-lg">
            <h3 className="text-xl font-semibold mb-4">E-commerce Control</h3>
            <ul>
              <li>🔹 Approve garments for selling</li>
              <li>🔹 Manage commission-based sales</li>
              <li>🔹 View sales reports</li>
            </ul>
          </div>
        );
      default:
        console.error(`Unknown tab: ${activeTab}`);
        return (
          <div className="text-gray-700 text-lg">
            Select an option from the sidebar.
          </div>
        );
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
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex items-center justify-center p-8"
      >
        <div className="bg-white p-8 shadow-2xl rounded-xl w-full max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{activeTab}</h2>
          {renderContent()}
        </div>
      </motion.div>
    </div>
  );
}
