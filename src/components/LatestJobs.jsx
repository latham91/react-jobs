import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import PropTypes from "prop-types";

export default function LatestJobs({ latestJobs }) {
  return (
    <section className="py-10 bg-slate-200">
      <div className="px-5 mx-auto space-y-10 max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center text-slate-800">Latest Jobs</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latestJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/jobs"
            className="text-lg font-semibold text-center btn bg-[#0A7EA4] hover:bg-[#0a7da4cc] w-[200px]"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

LatestJobs.propTypes = {
  latestJobs: PropTypes.array.isRequired,
};
