import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  function refreshCaptcha() {
    setCaptcha(generateCaptcha());
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (inputCaptcha !== captcha) {
      toast.error("Invalid CAPTCHA. Try again.");
      return;
    }

    setLoading(true);

    try {
      const response = await login(email, password);

      localStorage.setItem("token", response.token); // Save Token

      toast.success("Login successful! Redirecting to Admin Panel...");

      setTimeout(() => {
        navigate("/admin");
      }, 900);
    } catch (err) {
      toast.error(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome to <span className="text-blue-600">Stylic</span>!
        </h2>
        <p className="text-center text-gray-600 text-sm mt-2">
          Please sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Verify you're human</label>
            <div className="flex items-center justify-between border p-2 rounded-lg bg-gray-100">
              <span className="text-xl font-mono tracking-widest text-gray-800">
                {captcha}
              </span>
              <button
                type="button"
                onClick={refreshCaptcha}
                className="text-blue-600 text-sm"
              >
                🔄 Refresh
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter the captcha"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
              // required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 mt-6 rounded-lg hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}