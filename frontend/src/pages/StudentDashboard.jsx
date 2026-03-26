import { useEffect, useState } from "react";
import API from "../services/api";
import { LineChart, Line, XAxis, YAxis } from "recharts";

export default function Results() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/results/1").then(res => {
      setData(res.data.map((r, i) => ({
        name: `Exam ${i+1}`,
        score: r.score
      })));
    });
  }, []);

  return (
    <div className="p-6">
      <h1>Performance</h1>

      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="score" />
      </LineChart>
    </div>
  );
}