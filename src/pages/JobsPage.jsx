import { useState, useEffect, Suspense } from "react";

import JobCard from "../components/JobCard";
import SideBar from "../components/SideBar";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch("http://localhost:3000/jobs");

    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const data = await response.json();

    setJobs(data);
    setFilteredJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleFilter = (query) => {
    const filtered = jobs.filter((job) => {
      return (
        job.job_title.toLowerCase().includes(query.search.toLowerCase()) &&
        (query.location === "all" || job.location === query.location) &&
        (query.experience.length === 0 || query.experience.includes(job.experience))
      );
    });

    setFilteredJobs(filtered);
    console.log(filtered);
  };

  return (
    <main className="bg-slate-200">
      <div className="bg-[#23272F] text-white h-[200px] flex flex-col gap-4 items-center justify-center">
        <h1 className="text-5xl font-extrabold">Find your dream job</h1>
        <p className="text-lg">Your dream career is waiting for you.</p>
      </div>
      <section className="flex gap-5 px-5 py-10 mx-auto max-w-7xl">
        <SideBar jobs={jobs} filter={handleFilter} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Suspense fallback={<p>Loading...</p>}>
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </Suspense>
        </div>
      </section>
    </main>
  );
}
