import { useState } from "react";

export default function LoginPage() {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  function refreshCaptcha() {
    setCaptcha(generateCaptcha());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputCaptcha !== captcha) {
      setError("Invalid CAPTCHA. Try again.");
      return;
    }
    setError("");
    alert("Login Successful");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">Welcome to <span className="text-blue-600">Stylic</span>!</h2>
        <p className="text-center text-gray-600 text-sm mt-2">Please sign in to your account and start the instant photoshoot</p>
        
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Verify you're human</label>
            <div className="flex items-center justify-between border p-2 rounded-lg bg-gray-100">
              <span className="text-xl font-mono tracking-widest text-gray-800">{captcha}</span>
              <button type="button" onClick={refreshCaptcha} className="text-blue-600 text-sm">🔄 Refresh</button>
            </div>
            <input 
              type="text" 
              placeholder="Enter the captcha" 
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={inputCaptcha} 
              onChange={(e) => setInputCaptcha(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button type="submit" className="w-full bg-blue-600 text-white py-2 mt-6 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-blue-600 text-sm">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}
