import { useState } from "react";
import API from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "", email: "", password: "", role: "student"
  });

  const handleSubmit = async () => {
    await API.post("/register", form);
    alert("Registered!");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-6 shadow w-80">
        <h2 className="text-xl mb-4">Register</h2>

        <input placeholder="Name" className="border p-2 w-full mb-2"
          onChange={(e) => setForm({...form, name: e.target.value})} />

        <input placeholder="Email" className="border p-2 w-full mb-2"
          onChange={(e) => setForm({...form, email: e.target.value})} />

        <input type="password" placeholder="Password"
          className="border p-2 w-full mb-2"
          onChange={(e) => setForm({...form, password: e.target.value})} />

        <select className="border p-2 w-full mb-2"
          onChange={(e) => setForm({...form, role: e.target.value})}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <button className="bg-green-500 text-white w-full p-2"
          onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
}