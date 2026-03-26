import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/login", {
        email: email,
        password: password,
      });

      console.log("Login response:", res.data);

      // ✅ Save token
      localStorage.setItem("token", res.data.access_token);

      // ✅ Redirect
      navigate("/dashboard");

    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid credentials");
    }
  };

  return (
  <div className="flex flex-col items-center mt-20">
    <input
      type="email"
      placeholder="Email"
      className="border p-2 m-2"
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      className="border p-2 m-2"
      onChange={(e) => setPassword(e.target.value)}
    />

    <button
    onClick={handleLogin}
    className="bg-blue-500 text-white px-4 py-2 mt-2"
    >
    Login
    </button>

    <p
    onClick={() => navigate("/register")}
    className="text-blue-500 cursor-pointer mt-2"
    >
    Don't have an account? Register
    </p>
  </div>
);
}