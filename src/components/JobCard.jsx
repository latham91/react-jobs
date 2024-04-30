import { Link } from "react-router-dom";
import { MapPinned, Home } from "lucide-react";
import PropTypes from "prop-types";

export default function JobCard({ job }) {
  return (
    <div className="flex flex-col gap-5 p-5 bg-white rounded-lg shadow-md">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Home size={14} />
            {job.location_type}
          </div>
          <div className="flex items-center gap-1">
            <MapPinned size={14} />
            {job.location}
          </div>
        </div>
        <h2 className="text-sm font-medium">{job.company}</h2>
        <h3 className="text-xl font-bold text-slate-800">{job.job_title}</h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="line-clamp-3">{job.description}</p>
        <Link to="/job/1" className="text-blue-600 hover:underline">
          Read more
        </Link>
      </div>
      <div>
        <span className="font-bold text-slate-700">{`${job.currency}${job.salary_min.toLocaleString()} - ${
          job.currency
        }${job.salary_max.toLocaleString()} / ${job.salary_type}`}</span>
      </div>
      <div>
        <Link to="/job/1">
          <button className="px-5 py-2 text-white rounded-md bg-slate-800">Apply Now</button>
        </Link>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};
