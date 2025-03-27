import axios from "axios";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:8000/api").replace(/\/$/, "");

// Login function
export const login = async (email, password) => {
    try {
        const response = await axios.post(
            `${API_URL}/login`, 
            { email, password }, 
            { headers: { "Content-Type": "application/json" } }
        );

        const token = response.data?.data?.token;
        if (token) {
            localStorage.setItem("token", token);
        }

        return response.data;
    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

// Register function
export const registerAdmin = async (name, email, phone, password) => {
    try {
        const response = await axios.post(
            `${API_URL}/register`, 
            { name, email, phone, password }, 
            { headers: { "Content-Type": "application/json" } }
        );

        return response.data;
    } catch (error) {
        console.error("Registration failed:", error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

// Logout function
export const logout = (navigate) => {
    localStorage.removeItem("token");
    navigate("/login"); // Redirect to login page
};

// Get current user token
export const getToken = () => {
    return localStorage.getItem("token") || "";
};


export const getContacts = async () => {
    try {
      const response = await axios.get(`${API_URL}/getcontact`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      return response.data.data;
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return [];
    }
  };