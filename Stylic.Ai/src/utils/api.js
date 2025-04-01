import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post(`${import.meta.env.VITE_API_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    console.error("Error Submitting Form:", error);
    return { success: false, message: "Failed to submit the form" };
  }
}