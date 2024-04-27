import { Link } from "react-router-dom";
import { MapPinned, Home } from "lucide-react";

export default function JobCard() {
  return (
    <div className="flex flex-col gap-5 p-5 bg-white rounded-lg shadow-md">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Home size={14} />
            Full-time - Remote
          </div>
          <div className="flex items-center gap-1">
            <MapPinned size={14} />
            Preston, UK
          </div>
        </div>
        <h2 className="text-sm font-medium">Microsoft Corporation</h2>
        <h3 className="text-xl font-bold text-slate-800">Junior Front-End Developer</h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="line-clamp-3">
          We are looking for a Junior Front-End Developer to join our team. You will be working with a team of
          developers to build high-quality, dynamic web applications.
        </p>
        <Link to="/job/1" className="text-blue-600 hover:underline">
          Read more
        </Link>
      </div>
      <div>
        <span className="font-bold text-slate-700">$24,000 - $30,000 / per annum</span>
      </div>
      <div>
        <Link to="/job/1">
          <button className="px-5 py-2 text-white rounded-md bg-slate-800">Apply Now</button>
        </Link>
      </div>
    </div>
  );
}
