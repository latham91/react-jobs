import JobCard from "./JobCard";

export default function LatestJobs() {
  return (
    <section className="bg-slate-200 py-10">
      <div className="max-w-7xl mx-auto space-y-10 px-5">
        <h2 className="text-4xl font-extrabold text-center text-slate-800">Latest Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </section>
  );
}
