import { useState } from "react";
import API from "../services/api";

export default function TeacherDashboard() {
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [result, setResult] = useState(null);

  const generatePaper = async () => {
    const res = await API.post("/generate-paper", {
      subject,
      difficulty,
    });
    setResult(res.data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl">Teacher Dashboard</h1>

      <input placeholder="Subject"
        className="border p-2 m-2"
        onChange={(e) => setSubject(e.target.value)} />

      <select className="border p-2 m-2"
        onChange={(e) => setDifficulty(e.target.value)}>
        <option>easy</option>
        <option>medium</option>
        <option>hard</option>
      </select>

      <button className="bg-blue-500 text-white p-2"
        onClick={generatePaper}>
        Generate Paper
      </button>

      {result && (
        <div className="mt-4">
          <h2>Generated Questions:</h2>
          <pre>{result.questions}</pre>
        </div>
      )}
    </div>
  );
}