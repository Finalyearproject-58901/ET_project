import { useState } from "react";
import API from "../services/api";

export default function UploadAnswer() {
  const [file, setFile] = useState(null);

  const upload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await API.post("/upload-answer", formData);
    alert("Uploaded: " + res.data.file_path);
  };

  return (
    <div className="p-6">
      <h1>Upload Answer Sheet</h1>

      <input type="file"
        onChange={(e) => setFile(e.target.files[0])} />

      <button className="bg-blue-500 text-white p-2"
        onClick={upload}>
        Upload
      </button>
    </div>
  );
}