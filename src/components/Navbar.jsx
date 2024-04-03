import { Link, useLocation } from "react-router-dom";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="bg-[#364151] p-5 text-white border-b border-white/20">
      <nav className="flex items-center justify-between mx-auto max-w-7xl">
        <BrandLogo />
        <div>
          <ul className="flex items-center gap-2">
            <li>
              <Link to="/" className={`${pathname === "/" ? "bg-[#0A7EA4]" : "bg-transparent"} py-3 px-5 rounded-md`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className={`${pathname === "/jobs" ? "bg-[#0A7EA4]" : "bg-transparent"} py-3 px-5 rounded-md`}
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/add"
                className={`${pathname === "/add" ? "bg-[#0A7EA4]" : "bg-transparent"} py-3 px-5 rounded-md`}
              >
                Add Job
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
