'use client';
import React, { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState([]);

  const handleUpload = (e) => {
    const uploaded = Array.from(e.target.files);
    const newFiles = uploaded.map((file, i) => ({
      id: Date.now() + i,
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2)
    }));
    setFiles([...files, ...newFiles]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>CloudDrive Pro</h1>
      <input type="file" multiple onChange={handleUpload} />
      <ul>
        {files.map(file => (
          <li key={file.id}>
            {file.name} - {file.size} MB
          </li>
        ))}
      </ul>
    </div>
  );
}
