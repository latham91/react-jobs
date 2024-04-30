import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import { useEffect, useState } from "react";

export default function App() {
  const [latestJobs, setLatestJobs] = useState([]);

  const getLatestJobs = async () => {
    const response = await fetch("http://localhost:3000/jobs");

    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const data = await response.json();

    setLatestJobs(data.filter((job) => job.id > data.length - 3));
  };

  useEffect(() => {
    getLatestJobs();
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage latestJobs={latestJobs} />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
    </>
  );
}
