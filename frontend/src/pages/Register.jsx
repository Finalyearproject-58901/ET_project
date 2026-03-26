import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/register", {
        name,
        email,
        password,
        role,
      });

      alert("Registered successfully!");
      navigate("/");

    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <input
        placeholder="Name"
        className="border p-2 m-2"
        onChange={(e) => setName(e.target.value)}
      />

      <input
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

      <select
        className="border p-2 m-2"
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>

      <button
        onClick={handleRegister}
        className="bg-green-500 text-white px-4 py-2"
      >
        Register
      </button>
    </div>
  );
}