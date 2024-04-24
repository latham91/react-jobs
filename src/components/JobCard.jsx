import { Link } from "react-router-dom";
import { MapPinned, Home } from "lucide-react";

export default function JobCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="text-sm flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Home size={14} />
            Full-time - Remote
          </div>
          <div className="flex items-center gap-1">
            <MapPinned size={14} />
            Manchester, UK
          </div>
        </div>
        <h2 className="text-sm font-medium">Microsoft Corporation</h2>
        <h3 className="text-xl font-bold text-slate-800">Junior Front-End Developer</h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sed laborum explicabo assumenda accusantium
          repudiandae sint alias expedita laudantium sapiente ad fuga? Quas beatae deserunt consectetur vitae? Esse,
          atque pariatur!
        </p>
        <Link to="/job/1" className="text-blue-600 hover:underline">
          Read more
        </Link>
      </div>
      <div>
        <span className="text-slate-700 font-bold">$24,000 - $30,000 / per annum</span>
      </div>
      <div>
        <Link to="/job/1">
          <button className="bg-slate-800 text-white py-2 px-5 rounded-md">Apply Now</button>
        </Link>
      </div>
    </div>
  );
}
